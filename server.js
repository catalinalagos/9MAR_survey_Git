const { clear } = require('console');

const http = require('http');
const port = process.env.PORT || 3000 


// # for the mongo db connection
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://catallarin:Fdqd4IJ5zJkwF6fJ@cluster0.mj25qrh.mongodb.net/?retryWrites=true&w=majority";
const mongoOptions = {
    wtimeoutMS: 2500,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
const client = new MongoClient(uri, mongoOptions);

// # for executing the app and expose get and post methods
var express = require('express'); 
const bodyParser = require("body-parser") 
const app = express();
app.use(bodyParser.urlencoded({ extended:true })); 
app.use(express.static('public'));

const DATABASE_NAME = "cluster0";
const DATABASE_COLLECTION = "results";

// # GET DATABASE RESULTS
app.get('/get_results', async (req, res) => {
    try {
        await client.connect();
        const db = client.db(DATABASE_NAME);
        const collection = db.collection(DATABASE_COLLECTION);

        var result = collection.find({}).toArray();

        return res.status(200).json(result);

        res.sendFile(__dirname+'/public/index.html');
        
      } catch(error) {
        throw res.status(500).json({ message: "Server error occured" });
    }
});

// # POST RESULT TO DATABASE
app.post("/formPost", async (req, res) => {
    try {
      var contentsub=JSON.stringify(req.body.content);

        //var surveyString = req.query.answer;
        //var surveyDegree = req.query.degree;

        await client.connect();
        const db = client.db(DATABASE_NAME);
        const collection = db.collection(DATABASE_COLLECTION);

        //const doc = { result: surveyString, course: surveyDegree };
        const doc = { answer: contentsub };
        await collection.insertOne(doc);

        return res.sendFile(__dirname+'/public/thanks.html');
        

        
      } catch(error) {
        throw res.status(500).json({ message: "Server error occured" });
    }
    
});


// # MAIN FUNCTION
var server = app.listen(port, function () {  
    var host = server.address().address;
    var port = server.address().port;
    console.log("Survey server listening at http://%s:%s", host, port);
});