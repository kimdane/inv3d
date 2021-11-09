const layerService  = require('../service/layer.service');
const logger = require('../logger/api.logger');

class LayerController {

    async getLayers(limit) {
        var resultLimit = limit || "25"
        logger.info('Controller: getLayers limit:', resultLimit);
        return await layerService.getLayers(parseInt(resultLimit));
    }

    async getLayer(layerId) {
        logger.info('Controller: getLayer', layerId);
        return await layerService.getLayer(layerId);
    }
    async createLayer(layer) {
        //logger.info('Controller: createLayer', layer);
        return await layerService.createLayer(layer);
    }

    async updateLayer(layer) {
        logger.info('Controller: updateLayer', layer);
        return await layerService.updateLayer(layer);
    }

    async deleteLayer(layerId) {
        logger.info('Controller: deleteLayer', layerId);
        return await layerService.deleteLayer(layerId);
    }
}
module.exports = new LayerController();
