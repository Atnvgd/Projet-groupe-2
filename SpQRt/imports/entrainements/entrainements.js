import './entrainements.html';

import './exercice5/exercice5.js';
import './exercice8/exercice8.js';
import './exercice10/exercice10.js';
import './ajouterentrain/ajouterentrain.js';
import './exercicesHaut/exercicesHaut.js';
import './exercicesBas/exercicesBas.js';
import './exercicesTout/exercicesTout.js';

Template.app_body.events({

    'click #exercice5' (event) {
        event.preventDefault();
        FlowRouter.go('exercice5');
    },

    'click #exercice8' (event) {
        event.preventDefault();
        FlowRouter.go('exercice8');
    },

    'click #exercice10' (event) {
        event.preventDefault();
        FlowRouter.go('exercice10');
    },

    'click #ajouterentrain' (event) {
        event.preventDefault();
        FlowRouter.go('ajouterentrain');
    },

    'click #exercicesHaut' (event) {
        event.preventDefault();
        FlowRouter.go('exercicesHaut');
    },

    'click #exercicesBas' (event) {
        event.preventDefault();
        FlowRouter.go('exercicesBas');
    },

    'click #exercicesTout' (event) {
        event.preventDefault();
        FlowRouter.go('exercicesTout');
    },
});