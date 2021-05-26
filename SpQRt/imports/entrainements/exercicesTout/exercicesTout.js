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

const structure = {
    titre: "L'exercice des burpees",
    muscle: "Une grande partie des muscles du corps",
    difficulte: 5,
    description: `Placez-vous debout les pieds légèrement écartés. <br>
        Descendez en pliant vos genoux (comme pour faire un squat) puis posez vos mains sur le sol. <br>
        Lancez vos jambes derrière vous et gardez vos bras tendus. <br>
        Votre corps doit faire une ligne droite. <br>
        Descendez en pliant vos coudes (comme pour faire une pompe). <br>
        Puis remontez en tendant le bras. <br>
        Ensuite ramenez vos pieds sous votre corps. <br>
        Finalement sautez verticalement les bras tendus vers le ciel. <br>
        Répétez l'exercice plusieurs fois. <br>`,
    image: "https://i.pinimg.com/originals/c4/cd/3d/c4cd3de835c9d3df08c6a976f315b5b9.jpg",
    qrCode: "lien vers le QR code",
    type: "tout"
}

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