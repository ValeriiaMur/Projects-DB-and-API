
exports.up = async function(knex) {
  await knex.schema.createTable("Project", (tbl) => {
    tbl.increments("ID");
    tbl.string("Name", 128)
        .notNullable()
    tbl.boolean("isCompleted")
        .notNullable()
    tbl.text("Description")
        .notNullable()
  })
  await knex.schema.createTable("Task", (tbl) => {
    tbl.increments("ID");
    tbl.text("Description")
        .notNullable()
    tbl.text("Notes")
        .notNullable()
    tbl.boolean("isCompleted")
        .notNullable()
    tbl.integer("ID_Project")
        .unsigned()
        .notNullable()
        .references("ID")
        .inTable("Project");
  })
  await knex.schema.createTable("Resource", (tbl) =>{
    tbl.increments("ID");
    tbl.string("Name", 128)
        .notNullable()
    tbl.text("Description");
  })
  await knex.schema.createTable("Project-Resource", (tbl) =>{
    tbl.increments("ID");
    tbl.integer("ID_Resource")
        .references("ID")
        .inTable("Resource")
        .unsigned()
        .notNullable();
    tbl.integer("ID_Project")
        .unsigned()
        .notNullable()
        .references("ID")
        .inTable("Project");
  })
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists("Project-Resource")
    .dropTableIfExists("Resource")
    .dropTableIfExists("Task")
    .dropTableIfExists("Project")
};
