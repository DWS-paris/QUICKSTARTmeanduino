/*
Attendre le chargement du DOM
*/
    $(document).ready( () => {

        /*
        Fonction globales
        */
            // Animation d'introduction
            function interfaceIntro(){
                $('header img').addClass('fadeInDown')
                $('header h1').addClass('fadeInUp')
                $('footer').addClass('fadeInDown')
            }
        // 
            

        /*
        Socket.io : configuration
        */
            // Initialisation de SOcket.io
            let socket = io()

            // Connexion de Socket.io
            socket = io.connect('http://localhost:8080')
        //

        /*
        Socket.io : recevoir des événements
        */
            // Réception de l'événement 'siteIntro'
                socket.on('siteIntro', () => {
                    // Lancer l'animation d'introduction
                    interfaceIntro()
                })
            // 
        // 

        
    })
// 