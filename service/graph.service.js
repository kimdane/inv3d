const graphRepository  = require('../repository/graph.repository');

class GraphService {

    constructor() {}

    async getGraphs(limit=25) {
        return await graphRepository.getGraphs(limit);
    }

    async getGraph(graphId) {
        return await graphRepository.getGraph(graphId);
    }

    async createGraph(graph) {
        return await graphRepository.createGraph(graph);
    }

    async updateGraph(graph) {
        return await graphRepository.updateGraph(graph);
    }

    async deleteGraph(graphId) {
        return await graphRepository.deleteGraph(graphId);
    }

}

module.exports = new GraphService();
