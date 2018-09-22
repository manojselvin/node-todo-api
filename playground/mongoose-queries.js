const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// let id = '6ba5f3ea0edc71172405b36a';

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log(todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todos) => {
//     console.log(todos);
// });
//
// Todo.findById(id).then((todos) => {
//     if (!todos) {
//         return console.log('Id not found');
//     }
//     console.log(todos);
// });

let id = '5b9de445735732374411d795';

if (!ObjectID.isValid(id)) {
    return console.log('Invalid id');
}

User.findById(id).then((user) => {
    if (!user) {
        return console.log('User not found!');
    }
    console.log(user);
}, (e) => {
    console.log(e);
})
