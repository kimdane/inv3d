const projectRepository  = require('../repository/project.repository');

class ProjectService {

    constructor() {}

    async getProjects(limit=25) {
        return await projectRepository.getProjects(limit);
    }

    async getProject(projectId) {
        return await projectRepository.getProject(projectId);
    }

    async createProject(project) {
        return await projectRepository.createProject(project);
    }

    async updateProject(project) {
        return await projectRepository.updateProject(project);
    }

    async deleteProject(projectId) {
        return await projectRepository.deleteProject(projectId);
    }

}

module.exports = new ProjectService();
