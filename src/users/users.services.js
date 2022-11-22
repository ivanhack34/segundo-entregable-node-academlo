//? File imports
const userControllers = require('./users.controllers')

const getAllUsers = (req, res) => {
    if(req.body){
        const allUsers = userControllers.findAllUsers()
        res.status(200).json(allUsers)
    }
}

const getUserBId = (req, res) => {
    const id = req.params.id
    const user = userControllers.findUserById(id)
    if(user){
        res.status(200).json(user)
    }else{
        res.status(404).json({message: "User does not exists"})
    }
}

const postNewUser = (req, res) => {
    const {first_name, last_name, email, password} = req.body
    if(first_name && last_name && email && password){
        const newUser = userControllers.createNewUser(req.body)
        res.status(201).json(newUser)
    }else{
        res.status(404).json({
            message: "Invalid Data",
            fields: {
                first_name: 'string*',
    	        last_name: 'string*',
    	        email: 'string*',
    	        password: 'string*',
    	        birthday: 'YYYY/MM/DD'
            }
        })
    }
}

const putUser = (req, res) => {
    const id = req.params.id
    const {first_name, last_name, email, password} = req.body
    if(first_name && last_name && email && password){
        const newUser = userControllers.updateUser(id, req.body)
        res.status(200).json(newUser)
    }else{
        res.status(404).json({
            message: "Invalid Data",
            fields: {
                first_name: 'string*',
    	        last_name: 'string*',
    	        email: 'string*',
    	        password: 'string*',
    	        birthday: 'YYYY/MM/DD'
            }
        })
    }
}

const deleteUser = (req, res) => {
    const id = req.params.id
    if(id){
        const response = userControllers.dropUser(id)
        res.status(200).json(response)
    }
}


module.exports = {
    getAllUsers,
    getUserBId,
    postNewUser,
    putUser,
    deleteUser
}