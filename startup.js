if(Meteor.isServer) {
  Meteor.startup(function() {
    if(Images.find().count() >= 0) {
      Images.insert({
        image_src: "laptops.jpg",
        image_alt: "laptops"
      });
      Images.insert({
        image_src: "beard.jpg",
        image_alt: "beard"
      });
      Images.insert({
        image_src: "bass.jpg",
        image_alt: "bass"
      });
    }
  });
}
