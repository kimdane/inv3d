const commitRepository  = require('../repository/commit.repository');

class CommitService {

    constructor() {}

    async getCommits(limit=25) {
        return await commitRepository.getCommits(limit);
    }

    async getCommit(commitId) {
        return await commitRepository.getCommit(commitId);
    }

    async createCommit(commit) {
        return await commitRepository.createCommit(commit);
    }

    async updateCommit(commit) {
        return await commitRepository.updateCommit(commit);
    }

    async deleteCommit(commitId) {
        return await commitRepository.deleteCommit(commitId);
    }

}

module.exports = new CommitService();
