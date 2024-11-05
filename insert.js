const { MongoClient } = require('mongodb')

// url of mongoDB 
const url = "mongodb+srv://Rutuja:rutu17112002@cluster0.zlmxc.mongodb.net/test"

const client = new MongoClient(url)

async function run() {
    try {
        await client.connect();
        const db = client.db()

        // Insert 
        const myobj = [{ name: "John", age: "28", address: "Pune" },
            { name: "Max", age: "23", address: "Mumbai" },
            { name: "Prince", age: "25", address: "Delhi" },
            { name: "Smith", age: "36", address: "Nagpur" },
        ]
        const result = await db.collection('mydatabase').insertMany(myobj)
        console.log(`Inserted ${result.insertedId}`);

    } catch (error) {
        console.error(error);

    } finally {
        client.close()
    }
}
run()