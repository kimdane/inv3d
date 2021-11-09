const artifactService  = require('../service/artifact.service');
const logger = require('../logger/api.logger');

class ArtifactController {

    async getArtifacts(limit) {
        var resultLimit = limit || "25"
        logger.info('Controller: getArtifacts limit:', resultLimit);
        return await artifactService.getArtifacts(parseInt(resultLimit));
    }

    async getArtifact(artifactId) {
        logger.info('Controller: getArtifact', artifactId);
        return await artifactService.getArtifact(artifactId);
    }
    async createArtifact(artifact) {
        //logger.info('Controller: createArtifact', artifact);
        return await artifactService.createArtifact(artifact);
    }

    async updateArtifact(artifact) {
        logger.info('Controller: updateArtifact', artifact);
        return await artifactService.updateArtifact(artifact);
    }

    async deleteArtifact(artifactId) {
        logger.info('Controller: deleteArtifact', artifactId);
        return await artifactService.deleteArtifact(artifactId);
    }
}
module.exports = new ArtifactController();
