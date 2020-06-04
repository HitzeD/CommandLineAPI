
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('commands').del()
    .then(function () {
      // Inserts seed entries
      return knex('commands').insert([
        {id: 1, name: 'Commit to Github', command: 'git commit -m <message>', platform_id: 1},
        {id: 2, name: 'Push to Github', command: 'git push', platform_id: 1},
        {id: 3, name: 'Make Migrations', command: 'npx knex migrate:make <migration name>', platform_id: 2},
        {id: 4, name: 'Commit Migrations', command: 'npx knex migrate:latest', platform_id: 2},
        {id: 5, name: 'Install NPM Library', command: 'npm install <library name>', platform_id: 3},
        {id: 6, name: 'Knex Rollback', command: 'npx knex migrate:rollback', platform_id: 2},
        {id: 7, name: 'Create Knex Seeds', command: 'npx knex seed:make <name>', platform_id: 2},
        {id: 8, name: 'Run Knex Seeds', command: 'npx knex seed:run', platform_id: 2},
        {id: 9, name: 'Run Latest Seed', command: 'npx knex seed:latest', platform_id: 2},
        {id: 10, name: 'Uninstall NPM Package', command: 'npm uninstall <package>', platform_id: 3}
      ]);
    });
};
