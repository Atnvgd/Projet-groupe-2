import { Exercices } from '../../api/exercices.js';

import './ajouterentrain.html';
import '../exercices/exercice.js';

Template.ajouterentrain.events({
    'click #publier-entrainements': function(event) {
        event.preventDefault();
        const Swal = require('sweetalert2')
        const titre = document.getElementById("titre");
        const muscle = document.getElementById("musclesUtilises");
        const difficulte = document.getElementById("diffEx");
        const duree = document.getElementById("duree");
        const description = document.getElementById("description");
        const type = document.getElementById("categorieEx");
        const image = document.getElementById("lien-image");
    
        if (titre.value == '' | muscle.value == '' | duree.value == '' | description.value == '') {
            Swal.fire({
                icon: 'error',
                title: 'Veuillez remplir les champs.',
              })
        } else {
        Exercices.insert({
            titre: titre.value,
            muscle: muscle.value,
            difficulte: difficulte.value,
            duree: duree.value,
            description: description.value,
            type: type.value,
            image: image.value,
        })

        Swal.fire({
            icon: 'success',
            title: 'Votre exercice a été ajouté!',
            showConfirmButton: false,
            timer: 1400
          }) 
          FlowRouter.go('entrainements');
        }
    }
});