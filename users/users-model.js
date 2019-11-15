const db = require('../database/dbConfig.js');

module.exports = {
    find,
    add,
    remove
}


//get all users

function find(){
    return db('users').select('id','username');
}



//add new user

function add(user) {
  return db('users').insert(user);
  }



//delete user

function remove(id){
    return db('users').del().where(id)
};

