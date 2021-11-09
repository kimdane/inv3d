const podRepository  = require('../repository/pod.repository');

class PodService {

    constructor() {}

    async getPods(limit=25) {
        return await podRepository.getPods(limit);
    }

    async getPod(podId) {
        return await podRepository.getPod(podId);
    }

    async createPod(pod) {
        return await podRepository.createPod(pod);
    }

    async updatePod(pod) {
        return await podRepository.updatePod(pod);
    }

    async deletePod(podId) {
        return await podRepository.deletePod(podId);
    }

}

module.exports = new PodService();
