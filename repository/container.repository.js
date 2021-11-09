const { connect, disconnect } = require('../config/db.config');
const { Container } = require('../model/assets.model');
const logger = require('../logger/api.logger');

class ContainerRepository {

    constructor() {
        connect();
    }

    async getContainers(limit=25) {
        const containers = await Container.find({}, null, { limit: limit}).exec();
        console.log('containers:::', containers.length);
        return containers;
    }

    async getContainer(containerId) {
        let data = {};
        try {
            data = await Container.findById(containerId);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async createContainer(container) {
        let data = {};
        container._id = container.id;
        try {
            data = await Container.create(container);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateContainer(container) {
        let data = {};
        try {
            data = await Container.updateOne(container);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteContainer(containerId) {
        let data = {};
        try {
            data = await Container.deleteOne({_id : containerId});
        } catch(err) {
            logger.error('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new ContainerRepository();
