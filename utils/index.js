const dotenv = require('dotenv');

dotenv.config();

function isDevEnv() {
    console.log("inside isDevEnv", process.env.IS_PROD)
    return process.env.IS_PROD == 'false';
}

module.exports = {
    isDevEnv,
}