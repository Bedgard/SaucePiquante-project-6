//pour hasher le mot de passe
const bcrypt = require("bcrypt");

// pour obtenir un token
const jwt = require("jsonwebtoken");

// importation du modèle utilisateur
const User = require('../models/User');

// importation de la variable d'environnement
const dotenv = require('dotenv');
dotenv.config();


//middleware pour créer un utilisateur
exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10) // hashage du mot de passe
        .then(hash => {
            const user = new User({ //creation du schéma User
                email: req.body.email,
                password: hash
            })
            user.save() // envoi de l'user dans la base de données 
                .then(() => res.status(201).json({ message: "Utilisateur crée !" }))
                .catch(error => res.status(400).json({ error }))
        })
        .catch(error => res.status(500).json({ error }))
};

//middleware pour se loger
exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email }) //chercher l'email dans la base de données
        .then(user => {
            if (user === null) { // s'il n'existe pas
                res.status(401).json({ message: "Paire identifiant/mot de passe incorrect" })
            }

            else {
                bcrypt.compare(req.body.password, user.password) //vérification de l'existence d'un utilisateur dans la base de données
                    .then(valid => {
                        if (!valid) { // si le mot de passe est différent, échec du mot de passe
                            res.status(401).json({ message: "Paire identifiant/mot de passe incorrect" })
                        }

                        else { //si le mot de passe de l'utilisateur de la DB correspond 
                            res.status(200).json({
                                userId: user._id,

                                //création du token : le token prend trois arguments
                                token: jwt.sign(
                                    { userId: user._id },
                                    `${process.env.TOKEN}`,
                                    { expiresIn: "12h" } //temps d'expiration du token
                                )
                            });
                        }
                    })

                    .catch(error => {
                        res.status(500).json({ error })
                    })
            }
        })
        .catch(error => res.status(500).json({ error }))
};