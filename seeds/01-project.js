
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Project').del()
    .then(function () {
      // Inserts seed entries
      return knex('Project').insert([
        {id: 1, Name: 'Get a new job', isCompleted: "false", Description: "I want domething more interesting"}
      ]);
    });
};
