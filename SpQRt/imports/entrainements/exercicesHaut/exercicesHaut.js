import { Exercices } from '../../api/exercices.js';

import './exercicesHaut.html';
import '../exercices/exerciceSelection.html'

Template.exercicesHaut.helpers({
    exercices: function() {
        return Exercices.find( { type: 'haut' } )
    }
})

Template.exercicesHaut.events({
    'click .bouton': function(event) {
        event.preventDefault();
        FlowRouter.go('exercices', { idExercice: this._id })
    },
});

Template.app_body.events({

    'click #exercice10' (event) {
        event.preventDefault();
        FlowRouter.go('exercice10');
    },

    'click #exercice11' (event) {
        event.preventDefault();
        FlowRouter.go('exercice11');
    },

    'click #exercice13' (event) {
        event.preventDefault();
        FlowRouter.go('exercice13');
    },

    'click #exercice14' (event) {
        event.preventDefault();
        FlowRouter.go('exercice14');
    },

    'click #exercice15' (event) {
        event.preventDefault();
        FlowRouter.go('exercice15');
    },
});