sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel'
    ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("statistics.premierleague.controller.Main", {
            onInit: function () {
            var oModel = this.getOwnerComponent().getModel("League");
            oModel.loadData(sap.ui.require.toUrl("statistics/premierleague/model/league.json"));
            }
        });
    });
