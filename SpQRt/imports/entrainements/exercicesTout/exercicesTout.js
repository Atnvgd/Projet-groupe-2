import './exercicesTout.html';

import './exercice2/exercice2.js';

Template.app_body.events({

    'click #exercice2' (event) {
        event.preventDefault();
        FlowRouter.go('exercice2');
    },
});