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
        if (mdp.length > 5) {
            if (mdp == mdp2) {
                if(nom != '' && mdp != '' && mail != '') {
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
                    alert('Veuillez remplir les champs!');
                }
            } else{
                alert('Vos mots de passe ne correspondent pas!');
            }
        } else{
            alert('Votre mot de passe est trop court!');
        }
    },

})