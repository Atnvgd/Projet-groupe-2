import './bm.html';
import '../entrainements/entrainements.js';
Template.app_body.events({
    'click #entrainements' (event) {
        event.preventDefault();
        FlowRouter.go('entrainements');
    },
});