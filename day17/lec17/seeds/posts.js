const faker = require('faker');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
  .then(function () {
    // insert into posts
    const posts = Array.from({length: 1000}).map(() => {
        return {
          title: faker.company.catchPhrase,
          content: faker.lorem.paragraph,
          imgUrl: faker.image.imageUrl
        }
    });
    return knex('posts').insert(posts)
  });
};
