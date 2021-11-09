const repoRepository  = require('../repository/repo.repository');

class RepoService {

    constructor() {}

    async getRepos(limit=25) {
        return await repoRepository.getRepos(limit);
    }

    async getRepo(repoId) {
        return await repoRepository.getRepo(repoId);
    }

    async createRepo(repo) {
        return await repoRepository.createRepo(repo);
    }

    async updateRepo(repo) {
        return await repoRepository.updateRepo(repo);
    }

    async deleteRepo(repoId) {
        return await repoRepository.deleteRepo(repoId);
    }

}

module.exports = new RepoService();
