const { MongoClient } = require('mongodb')

// url of mongoDB 
const url = "mongodb+srv://Rutuja:rutu17112002@cluster0.zlmxc.mongodb.net/test"

const client = new MongoClient(url)

async function run() {
    try {
        await client.connect();
        const db = client.db()


        const result = await db.collection('mydatabase').find().limit(3).toArray()
        console.log(result);

    } catch (error) {
        console.error(error);

    } finally {
        client.close()
    }
}
run()