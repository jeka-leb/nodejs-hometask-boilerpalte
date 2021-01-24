const { UserRepository } = require('../repositories/userRepository');

class UserService {

    // TODO: Implement methods to work with user

    getAllUsers() {
        const users = UserRepository.getAll();
        if (!users) {
            throw new Error('There are no users at all')
        }
        return users
    }

    getOneUser(person) {
        const user = UserRepository.getOne(person);
        if (!user) {
            throw new Error('Requested user has not been found')
        }
        return user
    }

    updateUser(id, data) {
        const userUpdated = UserRepository.update(id, data);
        if (!id || !data) {
            throw new Error('Provide appropriate data')
        }
        return userUpdated
    }

    createUser(data) {
        const newUser = UserRepository.create(data);
        if (!data) {
            throw new Error('New user has not been created')
        }
        return newUser
    }

    search(search) {
        const item = UserRepository.getOne(search);
        if(!item) {
            console.log(item)
            return null;
        }
        return item;
    }

    delete(id) {
        try {
            let user = UserRepository.delete(id);
            if (!user.length) {
                throw Error('User not deleted');
            }
            return user;
        } catch (error) {
            throw Error('User not deleted');
        }
    }
}

module.exports = new UserService();