import './body.html';
import '../../burgerMenu/bm.js';
import '../../connection/connection.js';
import '../../creercompte/creercompte.js';
import '../../ouverture/ouverture.js';
import '../../../lib/routing.js';

import { Template } from 'meteor/templating';

import { Commentaires } from '../../api/commentaires.js';

Template.app_body.helpers({
    utilisateur: () => Meteor.user().username,
});

Template.app_body.helpers({
    commentaires() {
       return Commentaires.find({});
      },
});

Template.app_body.events({

    'click #burgerMenu' (e) {

        let groupe0 = document.getElementById("map")
        groupe0.classList.toggle('visible')

        let groupe1 = document.getElementById("entrainements")
        groupe1.classList.toggle('visible')

        let groupe2 = document.getElementById("profil")
        groupe2.classList.toggle('visible')

        let groupe3 = document.getElementById("contact")
        groupe3.classList.toggle('visible')

        let groupe4 = document.getElementById("apropos")
        groupe4.classList.toggle('visible')

    },

    'click #map' (e) {

        let groupe0 = document.getElementById("map")
        groupe0.classList.toggle('visible')

        let groupe1 = document.getElementById("entrainements")
        groupe1.classList.toggle('visible')

        let groupe2 = document.getElementById("profil")
        groupe2.classList.toggle('visible')

        let groupe3 = document.getElementById("contact")
        groupe3.classList.toggle('visible')

        let groupe4 = document.getElementById("apropos")
        groupe4.classList.toggle('visible')

    },

    'click #entrainements' (e) {

        let groupe0 = document.getElementById("map")
        groupe0.classList.toggle('visible')

        let groupe1 = document.getElementById("entrainements")
        groupe1.classList.toggle('visible')

        let groupe2 = document.getElementById("profil")
        groupe2.classList.toggle('visible')

        let groupe3 = document.getElementById("contact")
        groupe3.classList.toggle('visible')

        let groupe4 = document.getElementById("apropos")
        groupe4.classList.toggle('visible')

    },

    'click #profil' (e) {

        let groupe0 = document.getElementById("map")
        groupe0.classList.toggle('visible')

        let groupe1 = document.getElementById("entrainements")
        groupe1.classList.toggle('visible')

        let groupe2 = document.getElementById("profil")
        groupe2.classList.toggle('visible')

        let groupe3 = document.getElementById("contact")
        groupe3.classList.toggle('visible')

        let groupe4 = document.getElementById("apropos")
        groupe4.classList.toggle('visible')

    },

    'click #contact' (e) {

        let groupe0 = document.getElementById("map")
        groupe0.classList.toggle('visible')

        let groupe1 = document.getElementById("entrainements")
        groupe1.classList.toggle('visible')

        let groupe2 = document.getElementById("profil")
        groupe2.classList.toggle('visible')

        let groupe3 = document.getElementById("contact")
        groupe3.classList.toggle('visible')

        let groupe4 = document.getElementById("apropos")
        groupe4.classList.toggle('visible')

    },

    'click #apropos' (e) {

        let groupe0 = document.getElementById("map")
        groupe0.classList.toggle('visible')

        let groupe1 = document.getElementById("entrainements")
        groupe1.classList.toggle('visible')

        let groupe2 = document.getElementById("profil")
        groupe2.classList.toggle('visible')

        let groupe3 = document.getElementById("contact")
        groupe3.classList.toggle('visible')

        let groupe4 = document.getElementById("apropos")
        groupe4.classList.toggle('visible')

    },
        
    'click #logout' (event) {
        const Swal = require('sweetalert2')
        event.preventDefault();
        Meteor.logout();
        FlowRouter.go('connexion')
        Swal.fire({
            icon: 'info',
            title: 'Vous êtes déconnecté!',
            showConfirmButton: false,
            timer: 1500
          }) 
    },

    
    
    
});