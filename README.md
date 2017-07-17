# Arduino/Web Controller
Cette application Web a été réalisée dans le cadre de recherches autours de l'adaptabilité du MEAN stack. Le prinicpe est de mettre en place un serveur NodeJS et ExpressJS dont la vue HTML/CSS/JS est controllée par une board Arduino UNO. Vous pouvez suivre les étapes du développement de ce projet via le Wiki associé à ce repo.

<br />

## Frameworks JavaScript
Pour réaliser cette application nous allons avoir besoin de différents framewoks, le principe de base du MEAN stack étant de placer le JavaScript comme langage globale mais nous n'allons pas couvrir toutes les possibilités des différents frameworks. Pour faire évoluer votre application vous devrez vous référer aux différentes API.

### Liste des APIs utilisées
- [NodeJS](https://nodejs.org/dist/latest-v8.x/docs/api/)
- [ExpressJs](http://expressjs.com/fr/4x/api.html)
- [JohnnyFive](http://johnny-five.io/api/)
- [Socket.io](https://socket.io/docs/)

<br />

## Arduino
La borad Arduino permet de manipuler des éléments du DOM de la partie Front de l'application. L'implémentation des différents composants est fait prgressivement et vous pourrez adapter leur mise en place avec d'autres composants. Le framework [JohnnyFive](http://johnny-five.io/api/) propose des tutoriels pour implémenter une grande quantité de composants différents.

### Liste des composants utilisées
- [Arduino UNO](https://letmeknow.fr/shop/arduino-officiels/153-a000066-arduino-uno-8058333490090.html?search_query=arduino&results=470)
- [Shield Grove](https://letmeknow.fr/shop/shields/925-base-shield-grove.html?search_query=grove&results=23)
- [Potentiomètre Grove](https://letmeknow.fr/shop/decouverte/928-potentiometre-10k-grove.html?search_query=grove&results=23)
- [LEDs (1 verte, 1 jaune, 1 rouge)](https://letmeknow.fr/shop/led/355-led-10mm-jaune.html?search_query=led&results=67)
- [Boutons (x2)](https://letmeknow.fr/shop/capteurs/416-boutons-poussoirs-tactiles.html?search_query=bouton&results=129)
- [Jumpers male <=> male](https://letmeknow.fr/shop/composants/31-kit-de-jumpers-6905752962641.html?search_query=jumper&results=25)
- [Breadboard](https://letmeknow.fr/shop/composants/34-carte-prototypage-rapide-3614400208224.html?search_query=breadboard&results=39)
- [Résistance (x2)](https://letmeknow.fr/shop/recherche?controller=search&orderby=position&orderway=desc&search_query=resistance&submit_search=)

<br /><br />

## Installation/Configuration
Après avoir fait le montage complet de votre Arduino, vous pouvez la connecter à votre ordinateur pour l'utiliser. Ouvrez un nouveau dossier sur votre ordinateur pour cloner ce repo :
```
git clone git@github.com:DWS-paris/MEANduino-ctrl.git MEANduino

cd MEANduino

npm install
```
<br />

Une fois le repo cloné sur votre ordinateur et les modules NPM installés, vous pouvezlancer votre serveur :
```
npm start
```
<br />

Votre application est disponible dans votre navigateur à l'adresse [http://localhost:8080](http://localhost:8080/)

<br /><br />

## L'arduiBot en action
Le résultat final de votre application en vidéo sur [Youtube](https://www.youtube.com/watch?v=wthGxhJ99E4)

[![IMAGE ALT TEXT HERE](https://github.com/DWS-paris/MEANduino-ctrl/blob/master/_wiki/IMG/coverVideo.png)](https://www.youtube.com/watch?v=wthGxhJ99E4)

<br>
<hr>

#### Références
- [Site Officiel NodeJS](https://nodejs.org/en/)
- [ExpressJs](http://expressjs.com/fr/)
- [Path](https://www.npmjs.com/package/path)
- [BodyParser](https://www.npmjs.com/package/body-parser)
- [Socket.io](https://socket.io/docs/)
- [Site Officiel JohnnyFive](http://johnny-five.io/)
- [Site Officiel Fritzing](http://fritzing.org/home/)
- [SHOP LetMeKnow.fr](https://letmeknow.fr/)
- [Les class ES6](https://googlechrome.github.io/samples/classes-es6/)
- [Opérateur ternaire](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_conditionnel)