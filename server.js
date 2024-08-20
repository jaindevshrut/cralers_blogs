const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://jaindevshrut:qhfcsmwOL5AiXAoQ@cluster0.7ou0r.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch(err => {
        console.error('Connection error', err);
    });

const blogSchema = new mongoose.Schema({
    name: String,
    email: String
});

const Blog = mongoose.model('registers', blogSchema);
app.get('/',(req, res) => {
    console.log(Blog)
    Blog.find({}).then(function(blogs){
            res.render("index",{blogList: blogs});
        })
        .catch(function(err){
            console.log(err);
          })
});

app.listen(4000, () => {
    console.log('Running on port 4000');
});
