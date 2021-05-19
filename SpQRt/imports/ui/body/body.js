import './body.html';
import '../../burgerMenu/bm.js';
import '../../connection/connection.js';
import '../../creercompte/creercompte.js';
import '../../ouverture/ouverture.js';
import '../../../lib/routing.js';

import { Template } from 'meteor/templating';

import { Commentaires } from '../api/commentaires.js';

Template.app_body.helpers({
    utilisateur: () => Meteor.user().username,
});

Template.app_body.helpers({
    commentaires() {
        return Commentaires.find({});
      },
});

Template.app_body.events({

    'click #burgerMenu' (event) {
        event.preventDefault();
        FlowRouter.go('burgerMenu');
    },

    'click #logout' (event) {
        event.preventDefault();
        Meteor.logout();
        FlowRouter.go('connexion')
    },
    
});