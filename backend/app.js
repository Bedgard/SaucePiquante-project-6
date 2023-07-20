//installation et importation de express
const express = require("express");

//créer la variable à exporter
const app = express();

//impoter le fichier database
const mongoose = require('../backend/database');

//debugger mongoose
mongoose.set("debug", true);

//importer "path" pour travailler avec les chemins liés au fichier
const path = require("path");

//importation de la route signup et login
const userRoutes = require('./routes/user');

//importation de la route sauce
const Products = require("./routes/products");

//Gérer les problèmes des CORS 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//transformer le body en JSON
app.use(express.json());

//creation de la première route 
app.use('/api/auth', userRoutes);

//creation de la seconde route : sauce
app.use("/api/sauces", Products);

//accèder à l'image avec la fonction middleware "express.static
app.use('/images', express.static(path.join(__dirname, "images")));



module.exports = app;