FlowRouter.route('/', {
    name: "connexion",
    action(){
        BlazeLayout.render("app_body", { main: "connexion" });
    }
}); 

FlowRouter.route('/contact', {
    name: 'contact',
    action(){
        BlazeLayout.render('app_body', { main: 'contact' });
    }
}); 

FlowRouter.route('/apropos', {
    name: 'apropos',
    action(){
        BlazeLayout.render('app_body', { main: 'apropos' });
    }
}); 

FlowRouter.route('/profil', {
    name: 'profil',
    action(){
        BlazeLayout.render('app_body', { main: 'profil' });
    }
}); 

FlowRouter.route('/map', {
    name: 'map',
    action(){
        BlazeLayout.render('app_body', { main: 'map' });
    }
});

FlowRouter.route('/entrainements', {
    name: 'entrainements',
    action(){
        BlazeLayout.render('app_body', { main: 'entrainements' });
    }
}); 

FlowRouter.route('/creercompte', {
    name: 'creercompte',
    action(){
        BlazeLayout.render('app_body', { main: 'creercompte' });
    }
}); 

FlowRouter.route('/ajouterentrain', {
    name: 'ajouterentrain',
    action(){
        BlazeLayout.render('app_body', { main: 'ajouterentrain' });
    }
});

FlowRouter.route('/exercicesHaut', {
    name: 'exercicesHaut',
    action(){
        BlazeLayout.render('app_body', { main: 'exercicesHaut' });
    }
});

FlowRouter.route('/exercicesBas', {
    name: 'exercicesBas',
    action(){
        BlazeLayout.render('app_body', { main: 'exercicesBas' });
    }
});

FlowRouter.route('/exercicesTout', {
    name: 'exercicesTout',
    action(){
        BlazeLayout.render('app_body', { main: 'exercicesTout' });
    }
});

FlowRouter.route('/exercice/:idExercice', {
    name: 'exercices',
    action(){
        BlazeLayout.render('app_body', { main: 'exercice' });
    }
})