
//importer le modèle sauce
const Sauce = require('../models/Products');


//permet de liker ou disliker une sauce
exports.likeDislike = (req, res, next) => {
    const test = req.body
    console.log("test:", test);

    const like = req.body.like
    console.log("like:", like);

    const userId = req.body.userId;
    console.log("userId :", userId);

    const sauceId = req.params.id;
    console.log("sauceId:", id);

}




// Increment:
// Inventory.findOneAndUpdate({ _id: mongoose.Types.ObjectId(id) }, { $inc: { quantity: 1 } }, { new: true }).then((results) => { console.log(results) });

// Decrement:
// Inventory.findOneAndUpdate({ _id: mongoose.Types.ObjectId(id) }, { $inc: { quantity: -1 } }, { new: true }).then((results) => { console.log(results) })



// Définit le statut « Like » pour
// l' userId fourni. Si like = 1,
// l'utilisateur aime (= like) la
// sauce. Si like = 0, l'utilisateur
// annule son like ou son
// dislike. Si like = -1,
// l'utilisateur n'aime pas (=
// dislike) la sauce. L'ID de
// l'utilisateur doit être ajouté
// ou retiré du tableau
// approprié. Cela permet de
// garder une trace de leurs
// préférences et les empêche
// de liker ou de ne pas disliker
// la même sauce plusieurs
// fois : un utilisateur ne peut
// avoir qu'une seule valeur
// pour chaque sauce. Le
// nombre total de « Like » et
// de « Dislike » est mis à jour à
// chaque nouvelle notation.