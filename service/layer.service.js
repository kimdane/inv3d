const layerRepository  = require('../repository/layer.repository');

class LayerService {

    constructor() {}

    async getLayers(limit=25) {
        return await layerRepository.getLayers(limit);
    }

    async getLayer(layerId) {
        return await layerRepository.getLayer(layerId);
    }

    async createLayer(layer) {
        return await layerRepository.createLayer(layer);
    }

    async updateLayer(layer) {
        return await layerRepository.updateLayer(layer);
    }

    async deleteLayer(layerId) {
        return await layerRepository.deleteLayer(layerId);
    }

}

module.exports = new LayerService();
