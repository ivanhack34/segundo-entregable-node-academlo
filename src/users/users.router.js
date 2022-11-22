//? Dependencies
const router = require('express').Router()

//? File imports
const userServices = require('./users.services')

router.get('/users', userServices.getAllUsers)
router.get('/users/:id', userServices.getUserBId)

router.post('/users', userServices.postNewUser)

router.put('/users/:id', userServices.putUser)

router.delete('/users/:id', userServices.deleteUser)

module.exports = router