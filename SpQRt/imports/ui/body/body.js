import './body.html';
import '../../ouverture/ouverture.js';
import '../../burgerMenu/bm.js';
import '../../connection/connection.js';
import '../../../lib/routing.js';

import { Template } from 'meteor/templating';

Template.app_body.events({

    'click #burgerMenu' (event) {
        event.preventDefault();
        FlowRouter.go('burgerMenu');
    },

    'click #home' (event) {
        event.preventDefault();
        FlowRouter.go('ouverture');
    },

    'click #connexion' (event) {
        event.preventDefault();
        FlowRouter.go('connexion');
    },
    
});