const { connect, disconnect } = require('../config/db.config');
const { License } = require('../model/assets.model');
const logger = require('../logger/api.logger');

class LicenseRepository {

    constructor() {
        connect();
    }

    async getLicenses(limit=25) {
        const licenses = await License.find({}, null, { limit: limit}).exec();
        console.log('licenses:::', licenses.length);
        return licenses;
    }

    async getLicense(licenseId) {
        let data = {};
        try {
            data = await License.findById(licenseId);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async createLicense(license) {
        let data = {};
        license._id = license.id;
        try {
            data = await License.create(license);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateLicense(license) {
        let data = {};
        try {
            data = await License.updateOne(license);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteLicense(licenseId) {
        let data = {};
        try {
            data = await License.deleteOne({_id : licenseId});
        } catch(err) {
            logger.error('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new LicenseRepository();
