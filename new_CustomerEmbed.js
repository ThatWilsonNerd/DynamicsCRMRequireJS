//  use RequireJS to ensure Knockout is loaded prior to running our stuff
requirejs(['new_knockout','new_XrmServiceToolkit'], function(ko) {
 	//  create our view model
	function Model() {
		var self = this;
		self.fullname = ko.observable(null);
		
		// do some stuff to get the data from the customer (assuming a contact)
		self.getData = function() {
			// we can put whatever code calls the XrmServiceToolkit here to grab our CRM data and set the fullname.
			self.fullname('Billy Bob');
		}
		self.getData();
	}
  
 	//  apply it
 	ko.applyBindings(new Model());
});
