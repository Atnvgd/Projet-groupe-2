import './entrainements.html';

import '../entrainements/exercice1/exercice1.js';
import '../entrainements/exercice2/exercice2.js';

Template.app_body.events({
    'click #exercice1' (event) {
        event.preventDefault();
        FlowRouter.go('exercice1');
    },

    'click #exercice2' (event) {
        event.preventDefault();
        FlowRouter.go('exercice2');
    },
});