require('dotenv').config();

module.exports = {
    PORT : process.env.PORT,
    dbName : process.env.DB_NAME,
    dbPort : process.env.DB_PORT,
    host : process.env.HOST,
    dbHost: process.env.DB_HOST,
    dbUser : process.env.DB_USER,
    dbPassword : process.env.DB_PASSWORD,
    
}