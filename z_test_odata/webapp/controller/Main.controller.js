sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.enerya.ztestodata.controller.Main", {
            onInit: function () {

            },

            onTableUpdateFinish: function(oEvent){
                console.log("heee");
            },

            onSelectionChange : function(oEvent){
                var oTable = oEvent.getSource();
                var sPath =  oTable.getSelectedContexts()[0].getPath();
                var oModel = this.getView().getModel();
                var oMainModel = this.getView().getModel("main");
                var oRowData = oModel.getProperty(sPath);
                oMainModel.setProperty("/Proje", oRowData);

                console.log(oRowData);

             var oDialog =  this.getView().byId("dialog");
                oDialog.open()

            },
            onCancel : function(){
                var oDialog =  this.getView().byId("dialog");
                oDialog.close()
            },

            formatDate: function(date) {
                if (!date) {
                    return "";
                }
                var dateFormatter = sap.ui.core.format.DateFormat.getDateInstance({pattern: "MM/dd/yyyy"});
                return dateFormatter.format(date);
            }
        });
    });
