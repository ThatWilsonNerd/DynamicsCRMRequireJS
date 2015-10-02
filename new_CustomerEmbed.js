//  use RequireJS to ensure Knockout is loaded prior to running our stuff
requirejs(['new_knockout'], function(ko) {
  //  create our view model
  var Model 
  
  //  apply it
  ko.applyBindings(new Model());
});
