//importation du modele products
const Sauce = require('../models/Products');

//importation du paquet fs qui permet de supprimer des fichiers
const fs = require("fs");

//fonction pour créer les sauces
exports.createSauce = (req, res, next) => {
    const sauceObject = JSON.parse(req.body.sauce);


    //creation un nouveau schéma pour les sauces
    const newSauce = new Sauce({
        ...sauceObject,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
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

// fonction pour afficher un seul sauce 
exports.getOneSauce = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id }) //récupérer la sauce correspondante à l'id dans la base de données
        .then((sauce) => res.status(200).json(sauce))
        .catch((error) => { res.status(404).json({ error }) })
};

// //fonction pour modifier une seule sauce
exports.modifyOneSauce = (req, res, next) => {
    //nous faisons une condition ternaire
    const sauceObject = req.file ? { // si la condition est vraie notre requête contient un fichier 
        ...JSON.parse(req.body.sauce), // nous parsons la requête
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`, //nous récupérons l'image modifiée
    } : { ...req.body } //sinon nous récupérons seulement le corps de la requête sans modification de l'image

    // récuperation de la sauce dans la base de données et modification de celle-ci
    Sauce.findOne({ _id: req.params.id })
        .then((sauce) => {
            if (sauce.userId !== req.auth.userId) { //vérifier que je suis bien le propriétaire de la sauce
                res.status(401).json({ message: "non-authorisé" })
            }

            else {
                Sauce.updateOne({ _id: req.params.id }, { ...sauceObject, _id: req.params.id })
                    .then(() => res.status(200).json({ message: "Objet modifié !" }))
                    .catch((error) => res.status(400).json({ error }));
            }
        })
        .catch((error) => {
            res.status(400).json({ error });
        });

};

// //fonction pour supprimer une seule sauce 
exports.deleteOneSauce = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id }) //selectionner le produit dans la base de données en fonction de l'id 
        .then(sauce => {
            if (sauce.userId !== req.auth.userId) { // vérifier que je suis bien le propriétaire de la sauce
                res.status(401).json({ message: "Non-authorisé" })
            }

            else {
                const filename = sauce.imageUrl.split('/images/')[1]; //selection de l'image à supprimer en la
                fs.unlink(`images/${filename}`, () => { // suppression de l'image correspondant à l'id dans la base de données
                    Sauce.deleteOne({ _id: req.params.id }) // suppreession des caractéristiques produits dans la base de données
                        .then(() => res.status(200).json({ message: "Objet supprimé!" }))
                        .catch(error => res.status(401).json({ error }))
                })
            };
        })


        .catch(error => res.status(500).json({ error }))
}

