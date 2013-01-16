/*	Quick and nasty data object for CSS properties on an element */

App.Element = Backbone.Model.extend({
	
	/* ---------------------   C O N S T S   ---------------------- */
	
	OBJ_TYPE: "Element",

	/* -----------------------   V A R S   ------------------------ */

	previewView: undefined,
	cssView: undefined,

	defaults: {
		"width":			"200px",
		"height":			"100px",
		"background-color":	"#000",
		"border-radius": 	"0px"
	},

	/* ----------------   I N I T I A L I S E R   ----------------- */

	initialize: function() {
		glog("Element: initialize");

		var self = this;

	},

	/* --------------   P U B L I C   M E T H O D S   ------------- */

	toMultilineString: function() {
		glog("Element: toMultilineString");

		var self = this,
			i,
			len = self.attributes.length,
			str = '';

		for(i in self.attributes) {
			str += i.toString() + ": ";
			str += self.attributes[i] + "; &#10;";
		}

		return str;

	}

	/* -------------   P R I V A T E   M E T H O D S   ------------ */

	
});
