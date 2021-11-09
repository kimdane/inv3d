const containerRepository  = require('../repository/container.repository');

class ContainerService {

    constructor() {}

    async getContainers(limit=25) {
        return await containerRepository.getContainers(limit);
    }

    async getContainer(containerId) {
        return await containerRepository.getContainer(containerId);
    }

    async createContainer(container) {
        return await containerRepository.createContainer(container);
    }

    async updateContainer(container) {
        return await containerRepository.updateContainer(container);
    }

    async deleteContainer(containerId) {
        return await containerRepository.deleteContainer(containerId);
    }

}

module.exports = new ContainerService();
