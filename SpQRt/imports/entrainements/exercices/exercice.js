import { Exercices } from '../../api/exercices.js';
import {Commentaires} from '../../api/commentaires.js';

import './exercice.html';

Template.exercice.helpers({
  donnees: function() {
    const idExercice = FlowRouter.getParam('idExercice')
    const exercice = Exercices.findOne( { _id: idExercice } )
    return exercice
  },
  commentaires: function() {
    return Commentaires.find( { idExercice : FlowRouter.getParam('idExercice') } )
  }
});

//Ici pour les commentaires


Template.exercice.events({
  'click #publish': function(event) {
    event.preventDefault();
    const textarea = document.getElementById("textarea");
    const monselect = document.getElementById("monselect");
    Commentaires.insert({
      note : monselect.value,
      texte : textarea.value,
      idExercice : FlowRouter.getParam('idExercice'),
    });
  },
//Commentaires.find( { idExercice : FlowRouter.getParam('idExercice') } )
});