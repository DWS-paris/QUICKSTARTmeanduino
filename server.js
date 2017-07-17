/*
Configuration du server
*/
    // Importer les composants
    let express = require('express')
    let path = require('path')
    let bodyParser = require('body-parser')

    require('events').EventEmitter.prototype._maxListeners = 100;

    // Importer les fichiers de gestion des routes
    let front = require('./routes/front')

    // Définir le port
    let port = 8080;

    // Initier le serveur
    let app = module.exports.app = express()

    // Définir le dossier static de la partie front
    app.set('views', path.join(__dirname, 'www'))
    app.use(express.static(path.join(__dirname, 'www')))

    // Configurer body-parser
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: false}))

    // Définir les routes
    app.use('/', front)
// 


/*
Configuration la board Arduino
*/
    // Importer le composant 'johnny-five'
    let five = require('johnny-five');

    // Initier la board
    let board = new five.Board({
        repl:true
    });
// 



/*
Configuration Socket.io
*/
    // Ecouter le serveur
    let server = app.listen(port)

    // Importer le composant 'socket.io' et écouter le serveur
    let io = require('socket.io').listen(server)
//


/*
Constructeur : MRrobot  &@
Création d'un modèle objet pour ajouter de l'intelligence à l'Arduino
*/
    // Model objet MRrobot
    class MRrobot {
        constructor(){
            this.socket = null
        }

        /*
        Fonction pour lancer le robot
        */
            startBot(){
                // Lancer le site
                this.launchSite()
            }
        //

        /*
        Fonction pour lancer l'animation d'introduction
        */
            launchSite(){
                // Emettre l'événement 'siteIntro' pour lancer l'animation d'introduction
                this.socket.emit('siteIntro')
            }
        // 
    }


/*
Lancer la board pour écouter le serveur
*/
    board.on("ready", () => {
        console.log(`La board est connectée`)

        /*
        Connexion Socket.io entre le serveur et le Front
        */
            io.on('connection', (socket) => {
                console.log(`La connexion est établie.`)

                /*
                Configuration de l'arduiBot
                */
                    // Création de l'arduiBot
                    let arduiBot = new MRrobot()

                    // Ajout du socket
                    arduiBot.socket = socket

                    // Activer l'arduiBot
                    arduiBot.startBot()
                // 
            })
        // 
    })
// 