import './body.html';
import '../../ouverture/ouverture.js';
import '../../recherche/recherche.js';
import '../../apropos/apropos.js'
import '../../contact/contact.js';
import '../../profil/profil.js';
import '../../burgerMenu/bm.js';
import '../../carte/carte.js';
import '../../../lib/routing.js';
import '../../entrainements/entrainements.js';
import '../../connection/connection.js';


import { Template } from 'meteor/templating';

Template.app_body.events({
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

    'click #burgerMenu' (event) {
        event.preventDefault();
        FlowRouter.go('burgerMenu');
    },

    'click #home' (event) {
        event.preventDefault();
        FlowRouter.go('ouverture');
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