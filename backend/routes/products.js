
//importer le paquet express
const express = require("express");

//utilisation du router de express pour créer des routes
const router = express.Router();

//importation du middleware d'authentifcation
const authentifcation = require("../middleware/auth")

//importation du middleware multer pour les fichiers entrants
const multer = require("../middleware/multer");

//importer le controlleurs sauce
const ctrlProducts = require("../controllers/products");

//importer le controlleur like
const ctrlLikes = require("../controllers/likes");

//creation des routes pour le CRUD

//CREATE
router.post('/', authentifcation, multer, ctrlProducts.createSauce);
//READ
router.get("/", authentifcation, ctrlProducts.getAllSauces);
router.get("/:id", authentifcation, ctrlProducts.getOneSauce);
//UPDATE
router.put('/:id', authentifcation, multer, ctrlProducts.modifyOneSauce);
//DELETE
router.delete('/:id', authentifcation, ctrlProducts.deleteOneSauce);

//CREATION DE LA ROUTE POUR LES LIKE

//CREATE
router.post("/:id/like", authentifcation, ctrlLikes.likeDislike);

module.exports = router;