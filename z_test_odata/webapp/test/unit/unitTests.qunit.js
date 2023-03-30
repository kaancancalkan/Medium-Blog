/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comenerya/z_test_odata/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
