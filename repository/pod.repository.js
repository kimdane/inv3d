const { connect, disconnect } = require('../config/db.config');
const { Pod } = require('../model/assets.model');
const logger = require('../logger/api.logger');

class PodRepository {

    constructor() {
        connect();
    }

    async getPods(limit=25) {
        const pods = await Pod.find({}, null, { limit: limit}).exec();
        console.log('pods:::', pods.length);
        return pods;
    }

    async getPod(podId) {
        let data = {};
        try {
            data = await Pod.findById(podId);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async createPod(pod) {
        let data = {};
        pod._id = pod.id;
        try {
            data = await Pod.create(pod);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updatePod(pod) {
        let data = {};
        try {
            data = await Pod.updateOne(pod);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deletePod(podId) {
        let data = {};
        try {
            data = await Pod.deleteOne({_id : podId});
        } catch(err) {
            logger.error('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new PodRepository();
