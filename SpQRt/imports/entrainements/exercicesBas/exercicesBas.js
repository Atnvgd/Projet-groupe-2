import './exercicesBas.html';

import './exercice1/exercice1.js';
import './exercice3/exercice3.js';
import './exercice7/exercice7.js';

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
});