const { User } = require('../models');

const userData = [{
        username: 'John',
        password: 'JohnnyBravo'

    },
    {
        username: 'Jake',
        password: 'JaketheSnake'
    },
    {
        username: 'Jill',
        password: 'Jillybean'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;