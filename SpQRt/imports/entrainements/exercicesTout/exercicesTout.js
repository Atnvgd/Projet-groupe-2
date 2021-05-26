import { Exercices } from '../../api/exercices.js';

import './exercicesTout.html';

import './exercice2/exercice2.js';
import './exercice4/exercice4.js';
import './exercice6/exercice6.js';
import './exercice12/exercice12.js';
import './exercice16/exercice16.js';
import '../exercices/exerciceSelection.html';

Template.exercicesTout.helpers({
    exercices: function() {
        return Exercices.find( { type: 'tout' } )
    }
})

db.exercices.insert({titre: "Un entraînement circuit training",muscle: "Une grande partie des muscles du corps",difficulte: 4,duree: "7 min 30 le tour",description: `Suivez les exercices proposés sur l'image. <br>Effectuez chaque exercice pendant 30 secondes. <br>Entre chaque exercice vous pouvez prendre une pause de 10 secondes. <br>Si vous voulez faire plusieurs séries du circuit à la suite, vous pouvez prendre une pause de 2 minutes entre chaque série. <br>`,image: "https://www.epsregal.fr/wp-content/uploads/2020/03/eps-continuite-pedagogique.jpg",qrCode: "https://i.imgur.com/HhjBlC0.png ",type: "tout",});


Template.app_body.events({
    'click #exercice2' (event) {
        event.preventDefault();
        FlowRouter.go('exercice2');
    },

    'click #exercice4' (event) {
        event.preventDefault();
        FlowRouter.go('exercice4');
    },

    'click #exercice6' (event) {
        event.preventDefault();
        FlowRouter.go('exercice6');
    },

    'click #exercice12' (event) {
        event.preventDefault();
        FlowRouter.go('exercice12');
    },

    'click #exercice16' (event) {
        event.preventDefault();
        FlowRouter.go('exercice16');
    },
});