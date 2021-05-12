import './profil.html';

Template.profil.helpers({
    utilisateur: () => Meteor.user().username,
    email: () => Meteor.user().emails[0].address,
    age: () => Meteor.user().profile.age, 
    telephone: () => Meteor.user().profile.telephone, 
    sportFav: () => Meteor.user().profile.sportFav,
});