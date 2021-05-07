import './entrainements.html';

import './exercice1/exercice1.js';
import './exercice2/exercice2.js';
import './exercice3/exercice3.js';

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
});