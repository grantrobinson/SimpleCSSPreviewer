/*	Main application, holds references to child views and collections */

window.AppView = Backbone.View.extend({

	/* ---------------------   C O N S T S   ---------------------- */


	/* -----------------------   V A R S   ------------------------ */


	/* --------------   B A C K B O N E   V A R S   --------------- */

	el: $('#start-screen'),


	/* ------------   B A C K B O N E   M E T H O D S  ------------ */
	
	startApp: function() {
		glog("App: startApp");

		var self = this;

		self.element = new App.Element();
		self.preview = new App.ElementPreviewView( {model:self.element} );
		self.css = new App.ElementCSSView( {model:self.element} );

		// start screen setup
		// self.startScreen = new App.StartScreenView({collection:self.games});
		// self.startScreen.on(self.startScreen.ON_SELECT_GAME, function(pGame) {
		// 	self.selectGameHandler(pGame);
		// });
		// self.startScreen.on(self.startScreen.ON_NEW_GAME, function(e) {
		// 	self.newGameHandler(e);
		// });
	}


	/* --------------   P U B L I C   M E T H O D S   ------------- */



	/* -------------   E V E N T   H A N D L E R S   -------------- */


	// screen event handlers

	// selectGameHandler: function(pGame) {
	// 	// glog("App: selectGameHandler", pGame);
		
	// 	var self = this;

	// 	self.listenTo(self.startScreen, self.startScreen.ON_TRANSITION_OUT, function() {
	// 		self.gameNavScreen.openScreen(pGame);
	// 		self.gameNavScreen.transitionIn();
	// 		self.stopListening(self.startScreen, self.startScreen.ON_TRANSITION_OUT);
	// 	});
	// 	self.startScreen.transitionOut();
	// },

});

App = new AppView();
