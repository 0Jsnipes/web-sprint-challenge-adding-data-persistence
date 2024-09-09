/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('project_resources', (table) => {
      table.increments('id');
      table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('CASCADE');
      table.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('resource_id')
        .inTable('resources')
        .onDelete('CASCADE');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('project_resources');
  };
  