const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const { ObjectID } = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fgaci.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const app = express()
app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res)=> {
  res.send("Hello from Database it's working !!!")
})


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const registrations = client.db(process.env.DB_NAME).collection("volunteerRegistrations");
  const events = client.db(process.env.DB_NAME).collection("events");
  
  app.post('/addRegistration', (req,res) => {
    const newRegistration = req.body;
    registrations.insertOne(newRegistration)
    .then(result => {
      res.send(result.insertedCount > 0)
    })
  })

  app.post('/addEvent', (req,res) => {
    const newEvent = req.body;
    events.insertOne(newEvent)
    .then(result => {
      res.send(result.insertedCount > 0)
    })
  })

  app.get('/userSelectedEvents', (req,res)=>{
    queryEmail = req.query.email;
    registrations.find({email: queryEmail})
    .toArray((err, documents) => {
      res.status(200).send(documents)
    })
  })

  app.get('/volunteerRegistration', (req,res) => {
    registrations.find({})
    .toArray((err, documents) => {
      res.status(200).send(documents)
    })
  })

  app.get('/events', (req, res) => {
    events.find({})
    .toArray((err, documents) => {
      res.status(200).send(documents)
    })
  })


  app.delete('/delete', (req,res) => {
    registrations.deleteOne({_id: ObjectID(req.headers.id)})
    .then((result) => {
      res.send(result.deletedCount>0);
    })
  })

});


app.listen(process.env.PORT || 5000, () => {
  console.log(`Example app listening at http://localhost:5000`)
})