/*	StartScreen View
 */
App.StartScreenView = Backbone.View.extend({
	
	/* ---------------------   C O N S T S   ---------------------- */

	// events
	ON_DONE: "ON_DONE",
	
	// other consts
	MY_CONST: "HELLO",


	/* -----------------------   V A R S   ------------------------ */

	// screenWidth: 480,


	/* --------------   B A C K B O N E   V A R S   --------------- */

	// tagName: "li",
	// className: "document-row",
	el: $('#parallax'),

	// delegated events for interaction
	events: {
		// "click #parallax-arrow-left": "goLeft",
		// "click .button.delete": "destroy"
	},


	/* ------------   B A C K B O N E   M E T H O D S  ------------ */

	// at initialization bind to the relevant events on a collection etc
	initialize: function() {
		// glog("StartScreenView: initialize");

		var self = this;
	},

	render: function() {
		// glog("StartScreenView: render");
	}


	/* --------------   P U B L I C   M E T H O D S   ------------- */

	

	/* -------------   P R I V A T E   M E T H O D S   ------------ */

});
