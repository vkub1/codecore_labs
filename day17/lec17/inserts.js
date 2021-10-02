const knex = require('./client');

knex('posts').insert({
    title:'Our first post',
    content: 'Inserting records using knex.js',
    imgUrl: 'https://unsplash.com/s/photos/domestic-cat' 
}).then( 
    n => {
        console.log(`Inserted into posts`, n)
        knex.destroy();
    ;})
  .catch(console.log);



