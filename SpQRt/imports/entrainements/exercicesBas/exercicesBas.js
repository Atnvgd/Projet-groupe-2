import './exercicesBas.html';

import './exercice1/exercice1.js';

Template.app_body.events({
    'click #exercice1' (event) {
        event.preventDefault();
        FlowRouter.go('exercice1');
    },
});