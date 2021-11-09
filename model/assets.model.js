const mongoose = require('mongoose');

// K8s
const containerSchema = new mongoose.Schema({ _id: String, id: String, name: String }, { strict: false});
const Container  = mongoose.model('Container', containerSchema);

const podSchema = new mongoose.Schema({ _id: String, id: String, name: String }, { strict: false});
const Pod        = mongoose.model('Pod', podSchema);


// Bitbucket
const projectSchema = new mongoose.Schema({ _id: String, id: String, name: String }, { strict: false});
const Project    = mongoose.model('Project', projectSchema);

const repoSchema = new mongoose.Schema({ _id: String, id: String, name: String }, { strict: false});
const Repo       = mongoose.model('Repo', repoSchema);
               
const commitSchema = new mongoose.Schema({ _id: String, id: String }, { strict: false});
const Commit = mongoose.model('Commit', commitSchema);


// Syft/Artifactory
const licenseSchema = new mongoose.Schema({ _id: String, id: String, name: String }, { strict: false});
const License    = mongoose.model('License', licenseSchema);

const artifactSchema = new mongoose.Schema({ _id: String, id: String, name: String, version: String, type: String, licenses: [ {type: String, ref: 'License'} ] }, { strict: false});
const Artifact = mongoose.model('Artifact', artifactSchema);

const layerSchema = new mongoose.Schema({ _id: String, digest: String, mediaType: String, size: String }, { strict: false});
//https://stackoverflow.com/questions/37691476/mongoose-reversed-population-i-e-populating-a-parent-object-based-on-the-ref
const Layer = mongoose.model('Layer', layerSchema);

const imageSchema = new mongoose.Schema({ _id: String, imageID: String, userInput: String, manifestDigest: String, tags: Array, imageSize: String, layers: [ {type: String, ref: 'Layer'} ], artifacts: [ {type: String, ref: 'Artifact'} ], git_commit: {type: String, ref: 'Commit'} }, { strict: false});
const Image = mongoose.model('Image', imageSchema);


module.exports = {
    Artifact,
    Image,
    Layer,
    Commit,
    Container,
    Pod,
    Project,
    Repo
}
