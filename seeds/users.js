
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'admin113', hash: '$2b$12$Heww4/hOVnlCpC53IZ.yle3vUihW3U7ildG5Eobq.FLwxPEwDpFyi'},
        {id: 2, username: 'admin125', hash: '$2b$12$mjImatjv3CtGL0YHWA3RAOeBrOprpjvpUwt3NUiGvDK6G8NGW0MGq'},
        {id: 3, username: 'admin10', hash: '$2b$12$.78HqERc8EmRvHKi9Sjd/.jGapHRb.yAlstx2FxR9rmhCY1HUJb/q'},
      ]);
    });
};
