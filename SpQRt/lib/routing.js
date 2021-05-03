FlowRouter.route('/', {
    name: 'accueil',
    action(){
        BlazeLayout.render('app_body', { main: 'accueil' });
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

FlowRouter.route('/burgerMenu', {
    name: 'burgerMenu',
    action(){
        BlazeLayout.render('app_body', { main: 'burgerMenu' });
    }
}); 