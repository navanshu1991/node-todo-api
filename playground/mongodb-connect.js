//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');//destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){  
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    // db.collection('Todos').insertOne({
    //     test: 'Something to do',
    //     completed: false
    // }, (err, res) => {
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Navanshu',
    //     age: 28,
    //     location: 'Jaipur'
    // }, (err, res) => {
    //     if(err){
    //         return console.log('Unable to insert users', err);
    //     }
    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // })

    client.close();
});