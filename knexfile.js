const path = require('path');
const knex = require('knex');


module.exports={
    client: 'mysql',
    connection:{
        host: 'localhost',
        user: "root",
        database : 'insta_db',
        password: '',


    },
    version: '5.2',
    migrations:{
        tableName:'migrations',
        directory: path.resolve(__dirname,'./migrations'),
        
    },
    useNullAsDefault: true
};