const dotenv = require('dotenv');

dotenv.config();

function isDevEnv() {
    return process.env.IS_PROD == 'false';
}

module.exports = {
    isDevEnv,
}