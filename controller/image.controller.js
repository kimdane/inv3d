const imageService  = require('../service/image.service');
const logger = require('../logger/api.logger');

class ImageController {

    async getImages(limit) {
        var resultLimit = limit || "25"
        logger.info('Controller: getImages limit:', resultLimit);
        return await imageService.getImages(parseInt(resultLimit));
    }

    async getImage(imageId) {
        logger.info('Controller: getImage', imageId);
        return await imageService.getImage(imageId);
    }
    async createImage(image) {
        //logger.info('Controller: createImage', image);
        return await imageService.createImage(image);
    }

    async updateImage(image) {
        logger.info('Controller: updateImage', image);
        return await imageService.updateImage(image);
    }

    async deleteImage(imageId) {
        logger.info('Controller: deleteImage', imageId);
        return await imageService.deleteImage(imageId);
    }
}
module.exports = new ImageController();
