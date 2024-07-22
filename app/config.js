const dotenv = require('dotenv');

dotenv.config();

//const urlDb = process.env.URL_MONGODB_DEV;
module.exports = {
    urlDb : process.env.URL_MONGODB_DEV
}