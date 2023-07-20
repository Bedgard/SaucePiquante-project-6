//importer de multer qui va permettre de gérer la gestion des fichiers entrants sur les requêtes
const multer = require("multer");

//bibliothèque qui contient le format et la nature du fichier entrant
const MIME_TYPES = {
    "image/jpg": "jpg",
    "image/jpeg": "jpg",
    "image/png": "png"
};

//gestion de stockage des fichiers entrants 
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images') //les fichiers seront stockés dans le dossier images
    },

    filename: (req, file, callback) => {
        const name = file.originalname.split(" ").join('_'); //suppression des espaces dans le nom sinon joindre un underscore
        const extension = MIME_TYPES[file.mimetype]; //les fichiers entrants accepteront tous les extensions de la bibliothèque MIME_TYPES
        callback(null, name + Date.now() + '.' + extension);

    }
});


//exporter le middleware multer .single pour n'exporter qu'un seul fichier
module.exports = multer({ storage }).single('image');

