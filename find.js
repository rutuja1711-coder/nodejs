const { MongoClient } = require('mongodb')

// url of mongoDB 
const url = "mongodb+srv://Rutuja:rutu17112002@cluster0.zlmxc.mongodb.net/test"

const client = new MongoClient(url)

async function run() {
    try {
        await client.connect();
        const db = client.db()

        // Find
        // const result = await db.collection('mydatabase').find({}, { projection: { _id: 0, name: 1 } }).toArray()
        // console.log(result);
        // console.log(result._id);
        // console.log(result.name);

        var query = { address: "Pune" }
        const result = await db.collection('mydatabase').find(query).toArray()
        console.log(result);

    } catch (error) {
        console.error(error);

    } finally {
        client.close()
    }
}
run()