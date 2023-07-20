//importation du modele products
const Sauce = require('../models/Products');

//fonction pour créer les sauces
exports.createSauce = (req, res, next) => {
    const sauceObject = JSON.parse(req.body.sauce);


    //creation un nouveau schéma pour les sauces
    const newSauce = new Sauce({
        ...sauceObject,
        imageUrl: `${req.protocol}.//${req.get('host')}/images/${req.file.filename}` //création URL pour l'image
    });

    //enregistrement du produit dans la base de données
    newSauce.save()
        .then(() => res.status(201).json(
            {
                message: "Sauce enregistrée dans la base de données",
            }
        ))
        .catch(error => res.status(400).json({ error }));
};

//fonction pour afficher toutes les sauces
exports.getAllSauces = (req, res, next) => {
    Sauce.find() // récupération de tous les sauces dans la base de données
        .then((sauce) => { res.status(200).json(sauce) })
        .catch(error => { res.status(400).json({ error }) })
};

//fonction pour afficher un seul sauce 
exports.getOneSauce = (req, res, next) => {
    const _id = req.params.id //récupération de l'id du sauce

    Sauce.findOne({ _id }) //récupération de l'id selectionné dans la base de données 

        .then((sauce) => res.status(200).json(sauce))
        .catch((error) => { res.status(404).json({ error }) })
};


//fonction pour modifier une seule sauce
exports.modifyOneSauce = (req, res, next) => {

}

//fonction pour supprimer une seule sauce 
exports.deleteOneSauce = (req, res, next) => {

}



