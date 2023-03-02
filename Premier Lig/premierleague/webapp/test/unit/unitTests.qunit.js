/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"statistics/premierleague/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
