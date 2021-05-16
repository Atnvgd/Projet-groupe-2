import './exercicesTout.html';

import './exercice2/exercice2.js';
import './exercice4/exercice4.js';
import './exercice6/exercice6.js';

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
});