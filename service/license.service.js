const licenseRepository  = require('../repository/license.repository');

class LicenseService {

    constructor() {}

    async getLicenses(limit=25) {
        return await licenseRepository.getLicenses(limit);
    }

    async getLicense(licenseId) {
        return await licenseRepository.getLicense(licenseId);
    }

    async createLicense(license) {
        return await licenseRepository.createLicense(license);
    }

    async updateLicense(license) {
        return await licenseRepository.updateLicense(license);
    }

    async deleteLicense(licenseId) {
        return await licenseRepository.deleteLicense(licenseId);
    }

}

module.exports = new LicenseService();
