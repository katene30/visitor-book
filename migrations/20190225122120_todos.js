
exports.up = function(knex, Promise) {
  return knex.schema.createTable('todos', t => {
      t.increments('id').primary()
      t.integer('task')
      t.integer('priority')
      t.string('category')
      t.boolean('is_complete')
      t.integer('due_at')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todos')
};
