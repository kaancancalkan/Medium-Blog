sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("premier.lig.controller.Main", {
            onInit: function () {
                var oModel = this.getOwnerComponent().getModel("Student");
                 oModel.loadData(sap.ui.require.toUrl("premier/lig/model/student.json"));

            }
        });
    });
