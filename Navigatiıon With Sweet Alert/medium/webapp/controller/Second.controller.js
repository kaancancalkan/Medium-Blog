sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "nav/medium/utils/sweetalert"
], function(
	Controller,swalJS
) {
	"use strict";

	return Controller.extend("nav.medium.controller.Second", {

        /**
         * @override
         */
        onInit: function() {
            

            swal.fire("Second View");
        
        },

        onNavBack: function () {
            var oHistory = sap.ui.core.routing.History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("main", {}, true);
            }
        }
	});
});