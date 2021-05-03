import './body.html';
import '../../accueil/accueil.js';
import '../../apropos/apropos.js'
import '../../contact/contact.js';
import '../../../lib/routing.js';

import { Template } from 'meteor/templating';

Template.app_body.events({
    'click #accueil' (event) {
        event.preventDefault();
        FlowRouter.go('accueil');
    },

    'click #contact' (event) {
        event.preventDefault();
        FlowRouter.go('contact');
    },

    'click #apropos' (event) {
        event.preventDefault();
        FlowRouter.go('apropos');
    },
});