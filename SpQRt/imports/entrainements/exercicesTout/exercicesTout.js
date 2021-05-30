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