const bitbucketService  = require('../service/bitbucket.service');
const logger = require('../logger/api.logger');

class BitbucketController {

    async getCommits(limit) {
        var resultLimit = limit || "25"
        logger.info('Controller: getCommits limit:', resultLimit);
        return await commitService.getCommits(parseInt(resultLimit));
    }

    async getCommit(commitId) {
        logger.info('Controller: getCommit', commitId);
        return await commitService.getCommit(commitId);
    }
    async createCommit(commit) {
        //logger.info('Controller: createCommit', commit);
        return await commitService.createCommit(commit);
    }

    async updateCommit(commit) {
        logger.info('Controller: updateCommit', commit);
        return await commitService.updateCommit(commit);
    }

    async deleteCommit(commitId) {
        logger.info('Controller: deleteCommit', commitId);
        return await commitService.deleteCommit(commitId);
    }
}
module.exports = new BitbucketController();
