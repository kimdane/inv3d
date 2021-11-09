const { connect, disconnect } = require('../config/db.config');
const { Repo } = require('../model/assets.model');
const logger = require('../logger/api.logger');

class RepoRepository {

    constructor() {
        connect();
    }

    async getRepos(limit=25) {
        const repos = await Repo.find({}, null, { limit: limit}).exec();
        console.log('repos:::', repos.length);
        return repos;
    }

    async getRepo(repoId) {
        let data = {};
        try {
            data = await Repo.findById(repoId);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async createRepo(repo) {
        let data = {};
        repo._id = repo.id;
        try {
            data = await Repo.create(repo);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateRepo(repo) {
        let data = {};
        try {
            data = await Repo.updateOne(repo);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteRepo(repoId) {
        let data = {};
        try {
            data = await Repo.deleteOne({_id : repoId});
        } catch(err) {
            logger.error('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new RepoRepository();
