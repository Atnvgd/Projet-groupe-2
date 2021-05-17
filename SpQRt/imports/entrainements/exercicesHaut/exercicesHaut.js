import './exercicesHaut.html';
import './exercice10/exercice10.js';
import './exercice11/exercice11.js';
import './exercice13/exercice13.js';

Template.app_body.events({

    'click #exercice10' (event) {
        event.preventDefault();
        FlowRouter.go('exercice10');
    },

    'click #exercice11' (event) {
        event.preventDefault();
        FlowRouter.go('exercice11');
    },

    'click #exercice13' (event) {
        event.preventDefault();
        FlowRouter.go('exercice13');
    },
});