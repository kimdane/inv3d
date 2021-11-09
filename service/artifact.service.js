const artifactRepository  = require('../repository/artifact.repository');

class ArtifactService {

    constructor() {}

    async getArtifacts(limit=25) {
        return await artifactRepository.getArtifacts(limit);
    }

    async getArtifact(artifactId) {
        return await artifactRepository.getArtifact(artifactId);
    }

    async createArtifact(artifact) {
        return await artifactRepository.createArtifact(artifact);
    }

    async updateArtifact(artifact) {
        return await artifactRepository.updateArtifact(artifact);
    }

    async deleteArtifact(artifactId) {
        return await artifactRepository.deleteArtifact(artifactId);
    }

}

module.exports = new ArtifactService();
