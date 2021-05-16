import './exercicesBas.html';

import './exercice1/exercice1.js';
import './exercice3/exercice3.js';
import './exercice7/exercice7.js';
import './exercice9/exercice9.js';
import './exercice5/exercice5.js';
import './exercice8/exercice8.js';

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