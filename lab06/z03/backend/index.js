const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://database:27017/testdb',
  {
    useNewUrlParser: true
  }
);

const personSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String}
  });

const Person = mongoose.model("Person", personSchema);

app.get('/data', async (req, res) => {
    const data = await Person.find({});
    try {
        res.send(data);
      } catch (error) {
        res.status(500).send(error);
      }
});

const db = mongoose.connection;

app.listen(3000, () => {
    Person.create({
        firstName: "Adam",
        lastName: "Nowak"
    });
})