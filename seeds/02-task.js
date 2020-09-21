
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Task').del()
    .then(function () {
      // Inserts seed entries
      return knex('Task').insert([
        {id: 1, Description: 'Apply to jobs', isCompleted: "true", Notes: "How else you're going to find it?", ID_Project: 1}
      ]);
    });
};
