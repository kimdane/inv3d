const { connect, disconnect } = require('../config/db.config');
const { Commit, Repo, Project } = require('../model/assets.model');
const logger = require('../logger/api.logger');

class BitbucketRepository {

    constructor() {
        connect();
    }

    async getCommits(limit=25) {
        const commits = await Commit.find({}, null, { limit: limit}).exec();
        console.log('commits:::', commits.length);
        return commits;
    }

    async getCommit(commitId) {
        let data = {};
        try {
            data = await Commit.findById(commitId);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async createCommit(commit) {
        let data = {};
        commit._id = commit.id;
        try {
            data = await Commit.create(commit);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateCommit(commit) {
        let data = {};
        try {
            data = await Commit.updateOne(commit);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteCommit(commitId) {
        let data = {};
        try {
            data = await Commit.deleteOne({_id : commitId});
        } catch(err) {
            logger.error('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
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

    async getProjects(limit=25) {
        const projects = await Project.find({}, null, { limit: limit}).exec();
        console.log('projects:::', projects.length);
        return projects;
    }

    async getProject(projectId) {
        let data = {};
        try {
            data = await Project.findById(projectId);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async createProject(project) {
        let data = {};
        project._id = project.id;
        try {
            data = await Project.create(project);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateProject(project) {
        let data = {};
        try {
            data = await Project.updateOne(project);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteProject(projectId) {
        let data = {};
        try {
            data = await Project.deleteOne({_id : projectId});
        } catch(err) {
            logger.error('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }
}

module.exports = new BitbucketRepository();
