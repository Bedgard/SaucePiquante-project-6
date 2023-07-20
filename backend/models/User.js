//importer de mongoose
const mongoose = require("mongoose");

//importation de uniqueValidator pour créer un utilisateur unique
const uniqueValidator = require("mongoose-unique-validator");

// creation de l'architecture utilisateur pour la database
const UserSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

//sécurisation pour ne pas avoir deux fois le même mail dans la database
UserSchema.plugin(uniqueValidator);

//exportation du modèle ("clé"/"valeur")
module.exports = mongoose.model("User", UserSchema);