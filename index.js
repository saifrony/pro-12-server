const express = require('express');
const app = express();
const cors = require('cors');
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;

// middleare
app.use(cors());
app.use(express.json());







const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cust1.baig3hx.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run(){
    try{
        const laptopCollection =client.db('laptopCategory').collection('services');

        // data

        app.get('/services',async(req,res)=>{
            const query ={};
            const cursor =laptopCollection.find(query)
            const services = await cursor.toArray()
            res.send(services)
        })
    }
    finally{

    }

}
run().catch(console.log);

app.get('/', (req, res) => {
    res.send('simple Node Server');
});


app.listen(port, ()=>{
    console.log(`simple is not server running on port ${port}`)
})