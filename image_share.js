Images = new Mongo.Collection('images');
console.log(Images.find().count());

if (Meteor.isClient) {

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_EMAIL"
  });

  Template.images.helpers({images: Images.find({}, {sort: {rating: -1}})});

  Template.body.helpers({username: function() {
      console.log(Meteor.user());
      return Meteor.user();
    }
  });

  Template.images.events({
    'click .js-delbutton': function(event) {
      var id = this._id;
      console.log(id);
      $("#" + id).hide('slow', function() {
        console.log('this');
        Images.remove(id);
      });
    },
    'click .star-r': function(event) {
      var r = $(event.currentTarget).data("userrating");
      var id = this.id;
      Images.update({_id:id}, {$set: {rating: r}});
    }
  });



   console.log("I am the client");
}

if (Meteor.isServer) {
   console.log("I am the server");
}


console.log("where am I running");
