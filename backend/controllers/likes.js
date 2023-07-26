// importer le modèle sauce
const Sauce = require('../models/Products');


//permet de liker ou disliker une sauce
exports.likeDislike = (req, res, next) => {

    //les variables correspondantes aux données du body et de params

    const like = req.body.like //récupération du like ou du dislike
    console.log("like:", like);
    const userId = req.body.userId; //récupération de l'userId
    console.log("userId :", userId);
    const sauceId = req.params.id; //récupération de l'id
    console.log("sauceId:", sauceId);

    // pour ajouter un like

    if (like === 1) { //si le like est égale à 1
        Sauce.updateOne({ // sélection de la sauce à modifier
            _id: sauceId
        },
            {
                $push: {
                    usersLiked: userId //ajout de l'userId
                },

                $inc: {
                    likes: +1 //incrémentation de 1
                }
            })

            .then(() => res.status(200).json({ message: "j'ajoute un like!" }))
            .catch(error => res.status(400).json({ error }))
    }


    //pour ajouter un dislike
    if (like === -1) { //si le like égale à -1
        Sauce.updateOne({ // sélection de la sauce à modifier
            _id: sauceId
        }, {
            $push: {
                usersDisliked: userId //ajout de l'user Id
            },

            $inc: {
                dislikes: -1 // incrémentation de -1
            }

        })

            .then(() => res.status(200).json({ message: "j'ajoute un dislike!" }))
            .catch(error => res.status(400).json({ error }))
    }

    //pour décrémenter un like ou un dislike 
    if (like === 0) {
        Sauce.findOne({ _id: sauceId }) //récupération de la sauce à modifier
            .then(sauce => {
                if (sauce.usersLiked.includes(userId)) { //si la base de données contient déjà un userId
                    Sauce.updateOne({
                        _id: sauceId //alors modification de la sauce
                    },
                        {
                            $pull: {
                                usersLiked: userId
                            },

                            $inc: {
                                likes: -1 //décrémenter de 1 de la sauce selectionnée
                            }

                        })


                        .then(() => res.status(200).json({ message: "je supprime un like!" }))
                        .catch(error => res.status(400).json({ error }))

                }

                if (sauce.usersDisliked.includes(userId)) { //si la base de données contient déjà un userId
                    Sauce.updateOne({
                        _id: sauceId //alors modification de la sauce
                    }, {
                        $pull: {
                            usersDisliked: userId
                        },

                        $inc: {
                            dislikes: -1 //décrémententation de 1
                        }

                    })

                        .then(() => res.status(200).json({ message: "je supprime un dislike!" }))
                        .catch(error => res.status(400).json({ error }))
                }
            })

            .catch(error => res.status(400).json({ error }))

    }
}




























