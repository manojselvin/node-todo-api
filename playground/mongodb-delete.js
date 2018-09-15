// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log(`Unable to connect to MongoDB server`, err);
    }

    console.log('Connected to MongoDB server');

    //  deleteOne
    // db.collection('Users').deleteOne({name: 'Manoj Selvins'}).then((result) => {
    //     console.log(result);
    // });

    //  deleteMany
    // db.collection('Users').deleteMany({name: 'Manoj Selvin'}).then(result => console.log(result));

    //findOneAndDelete
    // db.collection('Users').findOneAndDelete({name: 'Vinod Selvin'}).then(result => console.log(result));

    // db.close();
});
