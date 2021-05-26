import { Exercices } from '../../api/exercices.js'

import './exercice.html';

Template.exercice.helpers({
  donnees: function() {
    const idExercice = FlowRouter.getParam('idExercice')
    const exercice = Exercices.findOne( { _id: idExercice } )
    return exercice
  }
});

//Ici pour les commentaires
const textarea = document.getElementById("textarea");
const monselect = document.getElementById("monselect");
const boutonPublier = document.getElementById("publish");

Template.exercice.events({

//Commentaires.find( { idExercice : FlowRouter.getParam('idExercice') } )
});