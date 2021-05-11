import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Accounts } from 'meteor/accounts-base';
import { meteor } from 'meteor/meteor';

import './creercompte.html';


Template.creercompte.events({
    

    'click #creercompte' (event) {
        event.preventDefault();
        let nom = document.getElementById('username').value;
        let mail = document.getElementById('email').value;
        let mdp = document.getElementById('password').value;
        let mdp2 = document.getElementById('password2').value;
        let pMessage = document.getElementById('pMessage');
        
        if (nom != '' && mdp != '' && mail != '') {
            if (mdp == mdp2) {
                if(mdp.length > 5) {
                    Accounts.createUser({
                        username: nom,
                        password: mdp,
                        email: mail,
                    }, 
                    (error) => {
                        if (error) {
                            alert(error.message);
                        } else{
                            setTimeout(() => FlowrouterGo('apropos'), 200);
                        }
                    });
                } else{
                    event.preventDefault();
                    pMessage.innerHTML = 'Mot de passe trop court!';
                }
            } else{
                event.preventDefault();
                pMessage.innerHTML = 'Vos mots de passe ne correspondent pas!';
            }
        } else{
            event.preventDefault();
            pMessage.innerHTML = 'Veuillez remplir les champs!';
        }
    },

})