sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("statistics.premierleague.controller.Main", {
            onInit: function () {
            var oModel = this.getOwnerComponent().getModel("League");
            oModel.loadData(sap.ui.require.toUrl("json/json/model/league.json"))
            }
        });
    });
