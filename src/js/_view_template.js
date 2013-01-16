/*	Parallax View
 */
App.StartScreenView = Backbone.View.extend({
	
	/* ---------------------   C O N S T S   ---------------------- */

	// events
	ON_DONE: "ON_BACK",
	ON_DONE: "ON_DONE",
	
	// other consts
	// MY_CONST: "HELLO",


	/* -----------------------   V A R S   ------------------------ */

	// screenWidth: 480,


	/* --------------   B A C K B O N E   V A R S   --------------- */

	// tagName: "li",
	// className: "document-row",
	el: $('#start-screen'),

	// delegated events for interaction
	events: {
		"click #back-btn": "backHandler",
		"click #done-btn": "doneHandler"
	},


	/* ------------   B A C K B O N E   M E T H O D S  ------------ */

	// at initialization bind to the relevant events on a collection etc
	initialize: function() {
		// glog("StartScreenView: initialize");

		var self = this;
	},

	render: function() {
		// glog("StartScreenView: render");
	},


	/* --------------   P U B L I C   M E T H O D S   ------------- */

	

	/* -------------   P R I V A T E   M E T H O D S   ------------ */

	backHandler: function(e) {
		// glog("StartScreenView: backHandler");
		var self = this;
		self.trigger(self.ON_BACK); // broadcast event
	},

	doneHandler: function(e) {
		// glog("StartScreenView: doneHandler");
		var self = this;
		self.trigger(self.ON_DONE); // broadcast event
	}

});
