
exports.up = function(knex, Promise) {
  return knex.schema.createTable('logs', table => {
    table.increments('id').primary()
    table.string('date')
    table.string('service')
    table.string('name')
    table.string('reference')
    table.string('time_in')
    table.string('time_out')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('logs')
};
