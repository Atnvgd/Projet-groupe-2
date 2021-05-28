import { Exercices } from '../../api/exercices.js';
import {Commentaires} from '../../api/commentaires.js';

import './exercice.html';

Template.exercice.helpers({
  donnees: function() {
    const idExercice = FlowRouter.getParam('idExercice')
    const exercice = Exercices.findOne( { _id: idExercice } )
    return exercice
  },
  utilisateur: () => Meteor.user().username,
  commentaires: function() {
    return Commentaires.find( { idExercice : FlowRouter.getParam('idExercice') } ) 
  }
});

Template.exercice.events({
  'click #publish': function(event) {
    event.preventDefault();
    const textarea = document.getElementById("textarea");
    const monselect = document.getElementById("monselect");
    const Swal = require('sweetalert2')

    if (textarea.value == '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `Votre commentaire est vide.`,
      })
    } else{
      Commentaires.insert({
        note : monselect.value,
        texte : textarea.value,
        idExercice : FlowRouter.getParam('idExercice'),
      });
    }
  },
});

