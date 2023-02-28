sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";


        return Controller.extend("json.json.controller.Main", {
            onInit: function () {
                 var oModel = this.getOwnerComponent().getModel("Student");
                 oModel.loadData(sap.ui.require.toUrl("json/json/model/student.json"));

                 //Eğer manifestte model tanımlanmazsa aşağıdaki 2 satır kullanılır
                //var oModel = new JSONModel(sap.ui.require.toUrl("json/json/model/student.json"));
                //this.getView().setModel(oModel , "Student");

            }
            
        });
    });
