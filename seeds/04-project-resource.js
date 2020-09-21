
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Project-Resource").del()
    .then(function () {
      // Inserts seed entries
      return knex("Project-Resource").insert([
        {id: 1, ID_Project: 1, ID_Resource: 1},
        {id: 2, ID_Project: 1, ID_Resource: 2}
      ]);
    });
};
