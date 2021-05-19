import './bm.html';

import '../entrainements/entrainements.js';
import '../recherche/recherche.js';
import '../contact/contact.js';
import '../apropos/apropos.js';
import '../profil/profil.js';
import '../map/map.js';

Template.app_body.events({
    'click #entrainements' (event) {
        event.preventDefault();
        FlowRouter.go('entrainements');
    },

    'click #contact' (event) {
        event.preventDefault();
        FlowRouter.go('contact');
    },

    'click #apropos' (event) {
        event.preventDefault();
        FlowRouter.go('apropos');
    },

    'click #profil' (event) {
        event.preventDefault();
        FlowRouter.go('profil');
    },

    'click #map' (event) {
        event.preventDefault();
        FlowRouter.go('map');
    },
});