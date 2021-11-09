const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const layerController = require('./controller/layer.controller');
const artifactController = require('./controller/artifact.controller');
const bitbucketController = require('./controller/bitbucket.controller');
const imageController = require('./controller/image.controller');
const graphController = require('./controller/graph.controller');



const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json({limit: '100mb'}));
app.use(express.static('public'));

// GRAPH
app.get('/api/graph/image/:id', (req, res) => {
    graphController.getImage(req.params.id, req.query.depth).then(data => res.json(data));
});

app.get('/api/graph/container/:id', (req, res) => {
    graphController.getContainer(req.params.id, req.query.depth).then(data => res.json(data));
});

app.get('/api/graph/license/:id', (req, res) => {
    graphController.getLicense(req.params.id, req.query.depth).then(data => res.json(data));
});

app.get('/api/graph/layer/:id', (req, res) => {
    graphController.getLayer(req.params.id, req.query.depth).then(data => res.json(data));
});

app.get('/api/graph/artifact/:id', (req, res) => {
    graphController.getArtifact(req.params.id, req.query.depth).then(data => res.json(data));
});

app.get('/api/graph/commit/:id', (req, res) => {
    graphController.getCommit(req.params.id, req.query.depth).then(data => res.json(data));
});

app.get('/api/graph/pod/:id', (req, res) => {
    graphController.getPod(req.params.id, req.query.depth).then(data => res.json(data));
});

app.get('/api/graph/repo/:id', (req, res) => {
    graphController.getRepo(req.params.id, req.query.depth).then(data => res.json(data));
});

app.get('/api/graph/project/:id', (req, res) => {
    graphController.getProject(req.params.id, req.query.depth).then(data => res.json(data));
});




app.get('/api/layers', (req, res) => {
    layerController.getLayers(req.query.limit).then(data => res.json(data));
});

app.get('/api/layer/:id', (req, res) => {
    layerController.getLayer(req.params.id).then(data => res.json(data));
});

app.get('/api/commits', (req, res) => {
    bitbucketController.getCommits(req.query.limit).then(data => res.json(data));
});

app.get('/api/commit/:id', (req, res) => {
    bitbucketController.getCommit(req.params.id).then(data => res.json(data));
});

app.post('/api/commit', (req, res) => {
    console.log(req.body);
    bitbucketController.createCommit(req.body).then(data => res.json(data));
});

app.get('/api/artifacts', (req, res) => {
    artifactController.getArtifacts(req.query.limit).then(data => res.json(data));
});

app.get('/api/artifact/:id', (req, res) => {
    artifactController.getArtifact(req.params.id).then(data => res.json(data));
});

app.post('/api/artifact', (req, res) => {
    //console.log(req.body);
    artifactController.createArtifact(req.body).then(data => res.json(data));
});

app.put('/api/artifact', (req, res) => {
    artifactController.updateArtifact(req.body).then(data => res.json(data));
});

app.delete('/api/artifact/:id', (req, res) => {
    artifactController.deleteArtifact(req.params.id).then(data => res.json(data));
});

app.get('/api/images', (req, res) => {
    imageController.getImages(req.query.limit).then(data => res.json(data));
});

app.get('/api/image/:id', (req, res) => {
    imageController.getImage(req.params.id).then(data => res.json(data));
});

app.post('/api/image', (req, res) => {
    //console.log(req.body);
    imageController.createImage(req.body).then(data => res.json(data));
});

app.put('/api/image', (req, res) => {
    imageController.updateImage(req.body).then(data => res.json(data));
});

app.delete('/api/image/:id', (req, res) => {
    imageController.deleteImage(req.params.id).then(data => res.json(data));
});

app.get('/', (req, res) => {
    res.send(`<h1>API Works !!!</h1>`);
});


app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
});
