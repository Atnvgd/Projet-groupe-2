import './exercice10.html';

Template.body.helpers({
    commentaires() {
        return Commentaires.find({});
      },
});

Template.exercice10.events({
    'submit .new-commentaire'(event) {
      // Prevent default browser form submit
      event.preventDefault();
  
      // Get value from form element
      const target = event.target;
      const text = target.text.value;
  
      // Insert a task into the collection
      Commentaires.insert({
        text,
        createdAt: new Date(), // current time
      });
  
      // Clear form
      target.text.value = '';
    },
  });