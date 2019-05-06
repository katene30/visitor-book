
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'admin', hash: '$2b$12$43OzF3u6BqgtcSiV/w9aLeufQ3Zg4eRuSGZ25h9b2hH7MUjZdh392'},
      ]);
    });
};
