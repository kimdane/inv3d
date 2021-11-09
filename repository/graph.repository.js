const { connect, disconnect } = require('../config/db.config');
const { Artifact, Image, Layer, Commit } = require('../model/assets.model');
const logger = require('../logger/api.logger');


class GraphRepository {

    constructor() {
        connect();
    }

    // GRAPH
    async getImage(imageId, depth=1) {
        let image = {};
        let nodes = [];
        let links = [];
        try {
            image = await Image.findById(imageId);
            logger.info('IMAGE: ' + image);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return { nodes: nodes, links: links };
    }

    async getImages(limit=25) {
        const images = await Image.find({}, null, { limit: limit}).exec();
        console.log('images:::', images);
        return images;
    }

    async getImage(imageId) {
        let data = {};
        try {
            data = await Image.findById(imageId);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async createImage(image) {
        let data = {};
        let artifacts = [];
        let layers = [];
        try {
            image.artifacts.forEach(element => { 
                element._id = element.id;
                artifacts.push(element);
            });
            await Artifact.insertMany(artifacts, { ordered: false });
        } catch(err) {
            logger.error('Error::' + err);
        }

        try {
            image.source.target.layers.forEach(element => { 
                element._id = element.digest;
                layers.push(element);
            });
            await Layer.insertMany(layers, { ordered: false });
        } catch(err) {
            logger.error('Error::' + err);
        }
        image = image.source.target;
        image._id = image.imageID;
        image.artifacts = artifacts;
        image.layers = layers;
        try {
            image.manifest = JSON.parse(Buffer.from(image.manifest, "base64").toString().replace(/"(\w+)\.(\w+)\.(\w+)\.(\w+)":/ig,'"$1_$2_$3_$4":').replace(/"(\w+)\.(\w+)\.(\w+)":/ig,'"$1_$2_$3":').replace(/"(\w+)\.(\w+)":/ig,'"$1_$2":'));
            image.config = JSON.parse(Buffer.from(image.config, "base64").toString().replace(/"(\w+)\.(\w+)\.(\w+)\.(\w+)":/ig,'"$1_$2_$3_$4":').replace(/"(\w+)\.(\w+)\.(\w+)":/ig,'"$1_$2_$3":').replace(/"(\w+)\.(\w+)":/ig,'"$1_$2":'));
            image.user = image.config.config.User;
            image.git_commit = { "_id": image.config.config.Labels.git_commit, "id": image.config.config.Labels.git_commit };
            await Commit.create(image.git_commit);
        } catch(err) {
            logger.error('Error::' + err);
        }
        try {
            data = await Image.create(image);
        } catch(errr) {
            try {
                data = await Image.findOneAndUpdate({ _id: image._id }, {
                    userInput: image.userInput,
                    
            let ximage = await Image.findById(image._id);
            ximage._id = undefined;
            logger.info('IMage ' + ximage._id);
            logger.info('Image ' + typeof ximage);
            ximage.userInput = image.userInput;
            //ximage.repoDigests = ximage.repoDigests + image.repoDigests;
            logger.info('Tags::' + ximage.tags);
            if (typeof ximage.tags == Array) {
                ximage.tags = ximage.tags.push(...image.tags);
            } else {
                ximage.tags = image.tags;
            }
            logger.info('Tags::' + ximage.tags);
                data = await Image.updateOne(ximage);
            } catch(err) {
                logger.error('Error::' + err);
            }
        }
        return data;
    }

    async updateImage(image) {
        let data = {};
        try {
            data = await Image.updateOne(image);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteImage(imageId) {
        let data = {};
        try {
            data = await Image.deleteOne({_id : imageId});
        } catch(err) {
            logger.error('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }


}

module.exports = new GraphRepository();
