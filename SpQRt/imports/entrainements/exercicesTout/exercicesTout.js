import { Exercices } from '../../api/exercices.js';

import './exercicesTout.html';
import '../exercices/exerciceSelection.html';

Template.exercicesTout.helpers({
    exercices: function() {
        return Exercices.find( { type: 'tout' } )
    }
});

Template.exercicesTout.events({
    'click .bouton': function(event) {
        event.preventDefault();
        FlowRouter.go('exercices', { idExercice: this._id })
    },
})

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