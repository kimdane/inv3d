const { connect, disconnect } = require('../config/db.config');
const { Project } = require('../model/assets.model');
const logger = require('../logger/api.logger');

class ProjectRepository {

    constructor() {
        connect();
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

module.exports = new ProjectRepository();
