
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'test2', hash: '$argon2id$v=19$m=8,t=2,p=1$aXqU5TJm7JcS13bxQ93TgA$wO1oA3ewMUCqZzpfgPDb3HPEWN8r3OS7ORUA5SFmrfo'},
      ]);
    });
};
