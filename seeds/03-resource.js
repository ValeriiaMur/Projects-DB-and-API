
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('Resource').insert([
        {id: 1, Description: 'Number one to find a job', Name: "laptop"},
        {id: 2, Description: 'To stay alive', Name: "coffee"}
      ]);
    });
};
