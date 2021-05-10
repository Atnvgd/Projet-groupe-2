import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Accounts } from 'meteor/accounts-base';
import { meteor } from 'meteor/meteor';

import './connection.html'

Template.connexion.events({

    'click #connexion-btn' (event) {
        event.preventDefault();
        let mail = document.getElementById('email').value;
        let mdp = document.getElementById('password').value;
        Meteor.loginWithPassword(mail, mdp, (error) => {
            if (error){
                alert(error.message)
            } else{
                SetTimeout(() => FlowrouterGo('apropos'), 200); 
            }
        });
    }

});