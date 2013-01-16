/*	Displays preview of DOM element */

App.ElementPreviewView = Backbone.View.extend({
	
	/* ---------------------   C O N S T S   ---------------------- */

	// events
	ON_UPDATE: "ON_UPDATE",
	
	// other consts


	/* -----------------------   V A R S   ------------------------ */


	/* --------------   B A C K B O N E   V A R S   --------------- */

	// tagName: "li",
	// className: "document-row",
	el: $('#temp-element'),

	// delegated events for interaction
	events: {
		// "click #back-btn": "backHandler",
		// "click #done-btn": "doneHandler"
	},


	/* ------------   B A C K B O N E   M E T H O D S  ------------ */

	// at initialization bind to the relevant events on a collection etc
	initialize: function() {
		glog("ElementPreviewView: initialize");

		var self = this;
		self.listenTo(self.model, "change", self.render);

		self.render();
	},

	render: function() {
		glog("ElementPreviewView: render");

		var self = this;
		self.$el.css( self.model.toJSON() );
	},


	/* --------------   P U B L I C   M E T H O D S   ------------- */

	

	/* --------------   E V E N T   H A N D L E R S   ------------- */

	updateHandler: function(e) {
		glog("ElementPreviewView: updateHandler");
		
		var self = this;


		self.trigger(self.ON_UPDATE); // broadcast event
	}

});
