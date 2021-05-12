import './profil.html';

Template.profil.helpers({
    utilisateur: () => Meteor.user().username,
    email: () => Meteor.user().email,
    age: () => Meteor.user().age, 
    telephone: () => Meteor.user().telephone, 
    sportFav: () => Meteor.user().sportFav,
});