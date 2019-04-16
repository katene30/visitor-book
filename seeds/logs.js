
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('logs').del()
    .then(function () {
      // Inserts seed entries
      return knex('logs').insert([
        {id: 1, service: 'Family Start', name: 'Katene', reference: 'Corrections', time_in: {}, time_out: {}},
        {id: 2, service: 'Pou Hakinakina', name: 'Kapuatere', reference: 'self', time_in: {}, time_out: {}},
        {id: 3, service: 'Te Ropu', name: 'Hinemoa', reference: 'self', time_in: {}, time_out: {}}
      ]);
    });
};
