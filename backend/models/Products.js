//importation de mongoose 
const mongoose = require("mongoose");

//création de l'architecture utilisateur sauce pour la database
const productsSchema = mongoose.Schema({
    userId: { type: String, require: true },
    name: { type: String, require: true },
    manufacturer: { type: String, require: true },
    description: { type: String, require: true },
    mainPeper: { type: String, require: true },
    imageUrl: { type: String, require: true },
    heat: { type: Number, require: true },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    userLiked: { type: [String] },
    usersDisliked: { type: [String] },
},
    { timestamps: true } // pour monter la date de création et de modification
);



//exporter le module ("clé / valeur")
module.exports = mongoose.model("Products", productsSchema);