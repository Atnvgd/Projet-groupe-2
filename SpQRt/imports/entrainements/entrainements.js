import './entrainements.html';

import './exercice4/exercice4.js';
import './exercice5/exercice5.js';
import './exercice6/exercice6.js';
import './exercice7/exercice7.js';
import './exercice8/exercice8.js';
import './exercice9/exercice9.js';
import './exercice10/exercice10.js';
import './ajouterentrain/ajouterentrain.js';
import './exercicesHaut/exercicesHaut.js';
import './exercicesBas/exercicesBas.js';
import './exercicesTout/exercicesTout.js';

Template.app_body.events({

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

    'click #exercice9' (event) {
        event.preventDefault();
        FlowRouter.go('exercice9');
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