
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('commands').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('commands').insert([
        {name: 'Commit to Github', command: 'git commit -m <message>', platform: 'Git'},
        {name: 'Push to Github', command: 'git push', platform: 'Git'},
        {name: 'Make migrations', command: 'npx knex migrate:make <migration name>', platform: 'Knex'},
        {name: 'Commit Migrations', command: 'npx knex migrate:latest', platform: 'Knex'},
      ]);
    });
};
