const bitbucketRepository  = require('../repository/bitbucket.repository');

class BitbucketService {

    constructor() {}

    async getCommits(limit=25) {
        return await bitbucketRepository.getCommits(limit);
    }

    async getCommit(commitId) {
        return await bitbucketRepository.getCommit(commitId);
    }

    async createCommit(commit) {
        return await bitbucketRepository.createCommit(commit);
    }

    async updateCommit(commit) {
        return await bitbucketRepository.updateCommit(commit);
    }

    async deleteCommit(commitId) {
        return await bitbucketRepository.deleteCommit(commitId);
    }

}

module.exports = new BitbucketService();
