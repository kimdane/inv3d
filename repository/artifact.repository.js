const { connect, disconnect } = require('../config/db.config');
const { Artifact, Image } = require('../model/assets.model');
const logger = require('../logger/api.logger');

class ArtifactRepository {

    constructor() {
        connect();
    }

    async getArtifacts(limit=25) {
        const artifacts = await Artifact.find({}, null, { limit: limit}).exec();
        console.log('artifacts:::', artifacts.length);
        return artifacts;
    }

    async getArtifact(artifactId) {
        let data = {};
        try {
            data = await Artifact.findById(artifactId);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async createArtifact(artifact) {
        let data = {};
        artifact._id = artifact.id;
        try {
            data = await Artifact.create(artifact);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateArtifact(artifact) {
        let data = {};
        try {
            data = await Artifact.updateOne(artifact);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteArtifact(artifactId) {
        let data = {};
        try {
            data = await Artifact.deleteOne({_id : artifactId});
        } catch(err) {
            logger.error('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new ArtifactRepository();
