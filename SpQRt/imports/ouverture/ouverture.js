import './ouverture.html'

Template.ouverture.helpers({
    utilisateur: () => Meteor.user().username,
});
