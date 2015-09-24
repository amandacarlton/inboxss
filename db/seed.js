var db = require('monk')('localhost/inbox');
var Messages = db.get('messages');

Messages.remove({})

.then(function() {
return Promise.all([
  Messages.insert({
    subject: "HEY",
    starred: false,
    read: false,
    filters:[]

  }),
Messages.insert({
    subject: "Do you see this",
    starred: false,
    read: false,
    filters:[]
  }),
  Messages.insert({
    subject: "How are you?",
    starred: false,
    read: false,
    filters:[]
  }),
  Messages.insert({
    subject: "Does this look like gmail",
    starred: false,
    read: false,
    filters:[]
  })
]);

})

.then(function(){
  db.close();
});
