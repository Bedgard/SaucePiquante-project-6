//importer js token et la variable d'environnement 
const jwt = require("jsonwebtoken");

//importation de la variable d'environnement
const dotenv = require("dotenv");
dotenv.config();

module.exports = (req, res, next) => {
    try {

        const token = req.headers.authorization.split(' ')[1]; //récupération du token en le
        const decodedToken = jwt.verify(token, `${process.env.TOKEN}`);
        const userId = decodedToken.userId;

        //comparer l'userId de la requête à celui du token
        if (req.body.userId && req.body.userId !== userId) {
            throw "User ID n'est pas valide"  // si le token ne correspond à l'userId

        } else {
            req.auth = {
                userId: userId
            }
        };
        next()

    } catch (error) { //problème d'authentification 
        res.status(401).json({ error })
    }

};