const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove({_id: '5ba65a7bc49712ec60ac5b19'}).then((todo) => {
//     console.log(todo);
// });

// Todo.findByIdAndRemove('5ba5f3ea0edc71172405b36d').then((todo) => {
//     console.log(todo);
// });
