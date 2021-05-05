import './bm.html';

import '../entrainements/entrainements.js';
import '../recherche/recherche.js';
import '../contact/contact.js';
import '../apropos/apropos.js';
import '../profil/profil.js';
import '../carte/carte.js';

Template.app_body.events({
    'click #entrainements' (event) {
        event.preventDefault();
        FlowRouter.go('entrainements');
    },

    'click #recherche' (event) {
        event.preventDefault();
        FlowRouter.go('recherche');
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

    'click #carte' (event) {
        event.preventDefault();
        FlowRouter.go('carte');
    },
});