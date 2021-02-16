const dotenv = require('dotenv');

dotenv.config();

function isDevEnv() {
    console.log("process.env.IS_PROD", process.env.IS_PROD)
    return process.env.IS_PROD === 'false';
}

module.exports = {
    isDevEnv,
}