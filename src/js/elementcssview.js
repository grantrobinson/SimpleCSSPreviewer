/*	Displays and allows editing of raw CSS */

App.ElementCSSView = Backbone.View.extend({
	
	/* ---------------------   C O N S T S   ---------------------- */

	// events
	ON_UPDATE: "ON_UPDATE",
	
	// other consts


	/* -----------------------   V A R S   ------------------------ */

	$textarea: undefined,
	updateTimeout: undefined,

	/* --------------   B A C K B O N E   V A R S   --------------- */

	// tagName: "li",
	// className: "document-row",
	el: $('#css-panel'),

	// delegated events for interaction
	events: {
		"click #update-btn": "updateHandler"
	},


	/* ------------   B A C K B O N E   M E T H O D S  ------------ */

	// at initialization bind to the relevant events on a collection etc
	initialize: function() {
		glog("ElementCSSView: initialize");

		var self = this;
		
		// listen to changes in model
		self.listenTo(self.model, "change", self.render);

		// listen to changes in textarea
		self.$textarea = self.$('#css-text');
		self.$textarea.keyup(function() {
			// wait a second before updating
			if(self.updateTimeout !== undefined) {
				clearTimeout(self.updateTimeout);
			}
			self.updateTimeout = setTimeout(function() {
				self.updateHandler();
			}, 1000);
		});

		self.render();
	},

	render: function() {
		glog("ElementCSSView: render");

		var self = this;

		self.$textarea.html( self.model.toMultilineString() );
	},


	/* --------------   P U B L I C   M E T H O D S   ------------- */

	

	/* -------------   P R I V A T E   M E T H O D S   ------------ */

	updateHandler: function(e) {
		glog("ElementCSSView: updateHandler");
		
		var self = this;

		// get content of textarea
		var str = self.$textarea.val();

		// clean up string, remove any line breaks
		str = self.trimUtil(str);

		// split it into rows
		var rows = str.split(';');
		var o = {};

		// loop through and prep for inserting back into model
		for(var i=0; i<rows.length; i++) {
			if(rows[i] !== "") {
				var propValPair = rows[i].split(':');
				// glog(propValPair);
				if(propValPair.length == 2) {
					var prop = self.trimUtil(propValPair[0]);
					var val = self.trimUtil(propValPair[1]);
					o[prop] = val;
				}
			}
		}

		// glog(o);

		// update model
		self.model.set(o);

		self.trigger(self.ON_UPDATE); // broadcast event
	},

	trimUtil: function(s) {
		return s.replace(/ {2,}/g,' ').replace(/[\n\r]*/g,'').replace(' ','');
	}

});
