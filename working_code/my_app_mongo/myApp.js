const {MongoClient} = require('mongodb')

var url = "mongodb://localhost:27017/mydb";

const database = 'mtdb'

const client = new MongoClient(url);

async function getData(){
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection("user");
    let response = await collection.find({}).toArray();
    console.log(response);
}

getData();