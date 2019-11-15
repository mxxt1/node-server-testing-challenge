
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'matt', password:"password"},
        {id: 2, username: 'cleveruser', password:"password"},
        {id: 3, username: 'mia', password:"password"},
        {id: 4, username: 'pops', password:"password"},
        {id: 5, username: 'abaduser', password:"password"}
      ]);
    });
};
