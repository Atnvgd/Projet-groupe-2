import './entrainements.html';

import './exercice1/exercice1.js';
import './exercice2/exercice2.js';
import './exercice3/exercice3.js';
import './exercice4/exercice4.js';
import './exercice5/exercice5.js';
import './exercice6/exercice6.js';
import './exercice7/exercice7.js';
import './exercice8/exercice8.js';

Template.app_body.events({
    'click #exercice1' (event) {
        event.preventDefault();
        FlowRouter.go('exercice1');
    },

    'click #exercice2' (event) {
        event.preventDefault();
        FlowRouter.go('exercice2');
    },

    'click #exercice3' (event) {
        event.preventDefault();
        FlowRouter.go('exercice3');
    },

    'click #exercice4' (event) {
        event.preventDefault();
        FlowRouter.go('exercice4');
    },

    'click #exercice5' (event) {
        event.preventDefault();
        FlowRouter.go('exercice5');
    },

    'click #exercice6' (event) {
        event.preventDefault();
        FlowRouter.go('exercice6');
    },

    'click #exercice7' (event) {
        event.preventDefault();
        FlowRouter.go('exercice7');
    },

    'click #exercice8' (event) {
        event.preventDefault();
        FlowRouter.go('exercice8');
    },
});