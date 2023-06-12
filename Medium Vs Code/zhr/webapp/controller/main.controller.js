sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("medium.zhr.controller.main", {
            onInit: function (oEvent) {
          
            },

            onTableUpdateFinish : function(oEvent){
                console.log ("debug");
            },

            onSelectionChange: function(oEvent){
              
              var oTable = oEvent.getSource();
              var sPath = oTable.getSelectedContexts()[0].getPath();
              var oModel = this.getView().getModel();
              var oRowData =oModel.getProperty(sPath);
              var oMainModel = this.getView().getModel("main");
              oMainModel.setProperty("/Personal",  oRowData);
                 
                    },
            yedek: function(oEvent){
        
                console.log(oRowData)
            }
                    
        });


    });
