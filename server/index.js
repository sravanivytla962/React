const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev')
const Rental = require('./models/rental');
const FakeDb = require('./fake-db');
const rentalRoutes= require('./routes/rentalroutes');
mongoose.connect(config.DB_URI).then(() =>{
    const fakedb = new FakeDb();
    fakedb.seeDb();
});
const app = express();
const PORT = process.env.PORT || 3001;

app.use('/api/v1/rentals', rentalRoutes);

app.listen(PORT, function(){
   console.log('i am running');
});