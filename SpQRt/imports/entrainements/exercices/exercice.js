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



