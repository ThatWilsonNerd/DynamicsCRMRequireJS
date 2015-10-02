//  use RequireJS to ensure Knockout is loaded prior to running our stuff
requirejs(['new_knockout','new_XrmServiceToolkit'], function(ko) {
 	//  create our view model
	function Model() {
		var self = this;
		self.fullname = ko.observable(null);
		
		// do some stuff to get the data from the customer (assuming a contact)
		self.fullname('Billy Bob');
	}
  
 	//  apply it
 	ko.applyBindings(new Model());
});
