const { connect, disconnect } = require('../config/db.config');
const { Layer } = require('../model/assets.model');
const logger = require('../logger/api.logger');

class LayerRepository {

    constructor() {
        connect();
    }

    async getLayers(limit=25) {
        const layers = await Layer.find({}, null, { limit: limit}).exec();
        console.log('layers:::', layers.length);
        return layers;
    }

    async getLayer(layerId) {
        let data = {};
        try {
            data = await Layer.findById(layerId);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async createLayer(layer) {
        let data = {};
        layer._id = layer.id;
        try {
            data = await Layer.create(layer);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateLayer(layer) {
        let data = {};
        try {
            data = await Layer.updateOne(layer);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteLayer(layerId) {
        let data = {};
        try {
            data = await Layer.deleteOne({_id : layerId});
        } catch(err) {
            logger.error('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new LayerRepository();
