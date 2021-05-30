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