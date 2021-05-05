FlowRouter.route('/', {
    name: 'ouverture',
    action(){
        BlazeLayout.render('app_body', { main: 'ouverture' });
    }
}); 

FlowRouter.route('/recherche', {
    name: 'recherche',
    action(){
        BlazeLayout.render('app_body', { main: 'recherche' });
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

FlowRouter.route('/burgerMenu', {
    name: 'burgerMenu',
    action(){
        BlazeLayout.render('app_body', { main: 'burgerMenu' });
    }
}); 

FlowRouter.route('/carte', {
    name: 'carte',
    action(){
        BlazeLayout.render('app_body', { main: 'carte' });
    }
});

FlowRouter.route('/entrainements', {
    name: 'entrainements',
    action(){
        BlazeLayout.render('app_body', { main: 'entrainements' });
    }
}); 

FlowRouter.route("/conexion", {
    name: "connexion",
    action(){
        BlazeLayout.render("app_body", { main: "connexion" });
    }
})