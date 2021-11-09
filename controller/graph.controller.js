const imageService  = require('../service/image.service');
const artifactService  = require('../service/artifact.service');
const podService  = require('../service/pod.service');
const containerService  = require('../service/container.service');
const layerService  = require('../service/layer.service');
const licenseService  = require('../service/license.service');
const bitbucketService  = require('../service/bitbucket.service');
const logger = require('../logger/api.logger');

class GraphController {

    async getImage(imageId, depth=1) {
        logger.info('Graph Controller: getImage', imageId);
        let image = {};
        let nodes = [];
        let links = [];
        try {
            image = await imageService.getImage(imageId);
            image.artifacts.forEach( artifact => {
                //let artifact = await artifactService.getArtifact(artifactId);
                nodes.push({id: artifact.id, type: 'artifact', name: artifact.name, version: artifact.version, language: artifact.language});
                links.push({ source: artifact.id, target: imageId, value: 2 });
            });
            let name = imageId;
            if (image.tags.length > 0) name = image.tags.pop();
            image = {id: imageId, name: name, git_commit: image.git_commit, repoDigests: image.repoDigests, tags: image.tags, type: 'image'};
            logger.info('IMAGE: ' + image);
            nodes.push(image);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return { nodes: nodes, links: links };
    }

    async getContainer(id, depth=1) {
		let obj = {};
		let nodes = [];
		let links = [];
		try {
			obj = await containerService.getContainer(id);
			nodes.push({id: obj.id, name: obj.name, type: 'container'});
		} catch(err) {
			logger.error('Error::' + err);
		}
		return { nodes: nodes, links: links };
	}


    async getLicense(id, depth=1) {
		let obj = {};
		let nodes = [];
		let links = [];
		try {
			obj = await licenseService.getLicense(id);
			nodes.push({id: obj.id, name: obj.name, type: 'license'});
		} catch(err) {
			logger.error('Error::' + err);
		}
		return { nodes: nodes, links: links };
	}


    async getLayer(id, depth=1) {
		let obj = {};
		let nodes = [];
		let links = [];
		try {
			obj = await layerService.getLayer(id);
			nodes.push({id: obj.id, name: obj.name, type: 'layer'});
		} catch(err) {
			logger.error('Error::' + err);
		}
		return { nodes: nodes, links: links };
	}


    async getArtifact(id, depth=1) {
		let obj = {};
		let nodes = [];
		let links = [];
		try {
			obj = await artifactService.getArtifact(id);
			nodes.push({id: obj.id, name: obj.name, type: 'artifact'});
		} catch(err) {
			logger.error('Error::' + err);
		}
		return { nodes: nodes, links: links };
	}


    async getCommit(id, depth=1) {
		let obj = {};
		let nodes = [];
		let links = [];
		try {
			obj = await bitbucketService.getCommit(id);
			nodes.push({id: obj.id, name: obj.name, type: 'commit'});
		} catch(err) {
			logger.error('Error::' + err);
		}
		return { nodes: nodes, links: links };
	}


    async getPod(id, depth=1) {
		let obj = {};
		let nodes = [];
		let links = [];
		try {
			obj = await podService.getPod(id);
			nodes.push({id: obj.id, name: obj.name, type: 'pod'});
		} catch(err) {
			logger.error('Error::' + err);
		}
		return { nodes: nodes, links: links };
	}


    async getRepo(id, depth=1) {
		let obj = {};
		let nodes = [];
		let links = [];
		try {
			obj = await bitbucketService.getRepo(id);
			nodes.push({id: obj.id, name: obj.name, type: 'repo'});
		} catch(err) {
			logger.error('Error::' + err);
		}
		return { nodes: nodes, links: links };
	}


    async getProject(id, depth=1) {
		let obj = {};
		let nodes = [];
		let links = [];
		try {
			obj = await bitbucketService.getProject(id);
			nodes.push({id: obj.id, name: obj.name, type: 'project'});
		} catch(err) {
			logger.error('Error::' + err);
		}
		return { nodes: nodes, links: links };
	}



    async getGraphs(limit) {
        var resultLimit = limit || "25"
        logger.info('Controller: getGraphs limit:', resultLimit);
        return await imageService.getGraphs(parseInt(resultLimit));
    }

    async getGraph(imageId) {
        logger.info('Controller: getGraph', imageId);
        return await imageService.getGraph(imageId);
    }
    async createGraph(image) {
        //logger.info('Controller: createGraph', image);
        return await imageService.createGraph(image);
    }

    async updateGraph(image) {
        logger.info('Controller: updateGraph', image);
        return await imageService.updateGraph(image);
    }

    async deleteGraph(imageId) {
        logger.info('Controller: deleteGraph', imageId);
        return await imageService.deleteGraph(imageId);
    }
}
module.exports = new GraphController();
