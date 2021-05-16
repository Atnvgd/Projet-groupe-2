import './entrainements.html';

import './ajouterentrain/ajouterentrain.js';
import './exercicesHaut/exercicesHaut.js';
import './exercicesBas/exercicesBas.js';
import './exercicesTout/exercicesTout.js';

Template.app_body.events({

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