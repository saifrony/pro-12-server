const express = require('express');
const app = express();
const cors =require('cors');
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;

// middleare
app.use(cors());
app.use(express.json());


// name:laptop
// password : zVq2XpeIr9hdNRur




const uri = "mongodb+srv://laptop:zVq2XpeIr9hdNRur@cust1.baig3hx.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run(){
    try{
        const laptopCollection =client.db('laptopCategory').collection('services');

        // data

        app.get('/sevices',async(req,res)=>{
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