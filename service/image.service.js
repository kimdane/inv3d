const imageRepository  = require('../repository/image.repository');

class ImageService {

    constructor() {}

    async getImages(limit=25) {
        return await imageRepository.getImages(limit);
    }

    async getImage(imageId) {
        return await imageRepository.getImage(imageId);
    }

    async createImage(image) {
        return await imageRepository.createImage(image);
    }

    async updateImage(image) {
        return await imageRepository.updateImage(image);
    }

    async deleteImage(imageId) {
        return await imageRepository.deleteImage(imageId);
    }

}

module.exports = new ImageService();
