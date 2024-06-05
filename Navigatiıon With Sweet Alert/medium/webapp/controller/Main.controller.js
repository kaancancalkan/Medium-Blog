sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "./BaseController",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,BaseController,MessageToast) {
        "use strict";

        return BaseController.extend("nav.medium.controller.Main", {
            onInit: function () {
                

            },
            
             
            onTilePress: function (oEvent) {
              var oTile = oEvent.getSource();
              var sTileTitle = oTile.getTitle();
              MessageToast.show("Pressed: " + sTileTitle);
              var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
              if (oTile.sId.includes("detailTile") ){
               
              oRouter.navTo("detail");
              }
              if (oTile.sId.includes("secondTile") ){
               
                oRouter.navTo("second");
                }
              //oRouter.navTo("detail");
          }
        
        });
    });
