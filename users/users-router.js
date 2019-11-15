const router = require('express').Router();
const bcrypt = require('bcrypt');

const users = require('./users-model.js');


router.get('/', (req, res) => {
    users.find()
    .then(users => {
        res.status(200).json(users);
    })
    .catch(error => {
        res.status(500).json({error: 'failed to get users', server_err: error});
    });
});



router.delete('/:id', (req,res) => {
    id = req.body.id;

    users.remove(id)
    .then(count => {
        res.status(200).json({message: `${count} records removed. User ${id} deleted.`});
    })
    .catch(err => {
        res.status(500).json({error: err, message: `failed to remove user ${id}`})
    });
});


router.post('/', (req,res) => {
    user = req.body;
    users.add(user)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({error: err, message:'failed to add user'})
    });
});




module.exports = router;