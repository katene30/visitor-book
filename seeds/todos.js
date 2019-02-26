
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task: 'make the thing', priority: 5, category: 'home', is_complete: false, due_at: '1551063598717'},
        {id: 2, task: 'name the thing', priority: 3, category: 'home', is_complete: false, due_at: '1551063653926'},
        {id: 3, task: 'do the thing', priority: 2, category: 'idek', is_complete: false, due_at: '1551063667085'},
        {id: 4, task: 'stop doing that thing', priority: 3, category: 'idek', is_complete: true, due_at: '1551063675889'},
      ]);
    });
};
