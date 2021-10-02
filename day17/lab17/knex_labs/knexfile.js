// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'knex_demo',
      username: 'vlad', // check in terminal with whoami
      password: 'root', // your postgres user password 
      // To reset the password: 
      // 1) In terminal connect to postgres using psql
      // 2) inside of psql use the command \password
      // 3) enter your new password  
    }
  },

  migrations: {
    tableName: 'migrations',
    directory: 'db',
    
},


};
