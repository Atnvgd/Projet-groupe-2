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