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