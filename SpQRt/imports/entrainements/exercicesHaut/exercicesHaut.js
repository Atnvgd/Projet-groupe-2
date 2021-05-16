import './exercicesHaut.html';
import './exercice10/exercice10.js';

Template.app_body.events({

    'click #exercice10' (event) {
        event.preventDefault();
        FlowRouter.go('exercice10');
    },

});