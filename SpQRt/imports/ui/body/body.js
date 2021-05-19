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

        let groupe2 = document.getElementById("map")
        groupe2.classList.toggle('visible')

        let groupe3 = document.getElementById("entrainements")
        groupe3.classList.toggle('visible')

        let groupe4 = document.getElementById("profil")
        groupe4.classList.toggle('visible')

        let groupe5 = document.getElementById("contact")
        groupe5.classList.toggle('visible')

        let groupe6 = document.getElementById("apropos")
        groupe6.classList.toggle('visible')
    },
        
    'click #logout' (event) {
        event.preventDefault();
        Meteor.logout();
        FlowRouter.go('connexion')
    },
    
});