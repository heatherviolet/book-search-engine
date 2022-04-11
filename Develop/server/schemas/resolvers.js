const { User, Book } = require('../models');

const resolvers = {
    Query: {
        books: async () => {
            return Book.find().sort({ createdAt: -1 });
        },
        book: async (parent, { _id }) => {
            return Book.findOne({ _id });
        },
        // get all users
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('books')
                .populate('savedBooks');
        },
        // get a user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('books')
                .populate('savedBooks');
        },
    }
};

module.exports = resolvers;