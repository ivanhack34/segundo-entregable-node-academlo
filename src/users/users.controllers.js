const usersDB = []
let id = 1

//?Para tener idea de lo que se tiene que guardar
// {
//     id: 1,
// 	first_name: 'string',
// 	last_name: 'string',
// 	email: 'string',
// 	password: 'string',
// 	birthday: 'YYYY/MM/DD'
// }

//? Para buscar todos los usuarios
const findAllUsers = () => {
    return usersDB
}

//? Para buscar el usuario por el id
const findUserById = (id) => {
    const filteredUser = usersDB.find(user => user.id == id)
    return filteredUser
}

//? Para la creacion de un nuevo usuario
const createNewUser = () => {
    const newUser = {
        id: id++,
        first_name: obj.first_name,
	    last_name: obj.last_name,
	    email: obj.email,
	    password: obj.password,
	    birthday: obj.birthday ? obj.birthday : 'birthday unknown' //? Es un campo opcional
    }
    usersDB.push(newUser)
    return newUser
}

module.exports = {
    findAllUsers,
    findUserById,
    createNewUser
}
