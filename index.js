const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();


// midelwear
app.use(cors());
app.use(express.json());
// Mongodb


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.apqupzl.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function dbCollection(){
    try{
        const blackcofferCollection=client.db('BlackcofferDB').collection('blackcofferData');
        app.get('/blackcoffer',async(req,res)=>{
            const query={};
            const results=await blackcofferCollection.find(query).toArray();
            res.send(results);
        });
        app.get('/sector',async(req,res)=>{
            const query={};
            const results=await blackcofferCollection.find(query).project({sector:1}).toArray();
            res.send(results);
        });
        app.get('/endyear',async(req,res)=>{
            const query={};
            const results=await blackcofferCollection.find(query).project({end_year:1}).toArray();
            res.send(results);
        });
        app.get('/intensity',async(req,res)=>{
            const query={};
            const results=await blackcofferCollection.find(query).project({intensity:1}).toArray();
            res.send(results);
        });
        app.get('/topic',async(req,res)=>{
            const query={};
            const results=await blackcofferCollection.find(query).project({topic:1}).toArray();
            res.send(results);
        });
        app.get('/region',async(req,res)=>{
            const query={};
            const results=await blackcofferCollection.find(query).project({region:1}).toArray();
            res.send(results);
        });
        app.get('/country',async(req,res)=>{
            const query={};
            const results=await blackcofferCollection.find(query).project({country:1}).toArray();
            res.send(results);
        });
        app.get('/source',async(req,res)=>{
            const query={};
            const results=await blackcofferCollection.find(query).project({source:1}).toArray();
            res.send(results);
        });
        app.get('/pestle',async(req,res)=>{
            const query={};
            const results=await blackcofferCollection.find(query).project({pestle:1}).toArray();
            res.send(results);
        });
        app.get('/likelihood',async(req,res)=>{
            const query={};
            const results=await blackcofferCollection.find(query).project({likelihood:1}).toArray();
            res.send(results);
        });
        app.get('/relevance',async(req,res)=>{
            const query={};
            const results=await blackcofferCollection.find(query).project({relevance:1}).toArray();
            res.send(results);
        });
    }
    finally{

    }
}
dbCollection().catch(console.log)

app.get('/', (req, res) => {
  res.send('Blackcoffer server site is running')
})

app.listen(port, () => {
  console.log(`Blackcoffer server site port ${port}`)
})