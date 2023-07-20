
//importer mongoose
const mongoose = require("mongoose");

//importer la variable d'environnement pour sécuriser les données sensibles
const dotenv = require("dotenv");
dotenv.config();

//connexion à la base de données MongoDB

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((error) => console.log('Connexion à MongoDB échouée !', error));

//Pour lier ce fichier à app.js
module.exports = mongoose;