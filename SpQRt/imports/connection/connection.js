import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Accounts } from 'meteor/accounts-base';
import { meteor } from 'meteor/meteor';

import './connection.html'

Template.connexion.events({

    'click #connexion-btn' (event) {
        const Swal = require('sweetalert2')
        event.preventDefault();
        let mail = document.getElementById('email').value;
        let mdp = document.getElementById('password').value;
        let pMessage = document.getElementById('pMessage');
        Meteor.loginWithPassword(mail, mdp, (error) => {
            if (error){
                pMessage.innerHTML = `Nom d'utilisateur ou mot de passe incorrect.`;
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `Nom d'utilisateur ou mot de passe incorrect.`,
                  })
            } else{
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Vous êtes connecté!',
                    showConfirmButton: false,
                    timer: 1200
                  }) 
            }
        });
    }

});