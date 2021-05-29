import { Exercices } from '../../api/exercices.js';


import './exercicesBas.html';
import '../exercices/exerciceSelection.html';

Template.exercicesBas.helpers({
    exercices: function() {
        return Exercices.find( { type: 'bas' } ) 
    }
});

Template.exercicesBas.events({
    'click .bouton': function(event) {
        event.preventDefault();
        FlowRouter.go('exercices', { idExercice: this._id })
    },
});

Template.app_body.events({

    'click #exercice1' (event) {
        event.preventDefault();
        FlowRouter.go('exercice1');
    },

    'click #exercice3' (event) {
        event.preventDefault();
        FlowRouter.go('exercice3');
    },

    'click #exercice7' (event) {
        event.preventDefault();
        FlowRouter.go('exercice7');
    },

    'click #exercice9' (event) {
        event.preventDefault();
        FlowRouter.go('exercice9');
    },

    'click #exercice5' (event) {
        event.preventDefault();
        FlowRouter.go('exercice5');
    },

    'click #exercice8' (event) {
        event.preventDefault();
        FlowRouter.go('exercice8');
    },
});