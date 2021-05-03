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