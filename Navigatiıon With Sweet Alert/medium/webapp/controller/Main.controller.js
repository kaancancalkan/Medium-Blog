sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "./BaseController",
    "sap/m/MessageToast",
    "nav/medium/utils/sweetalert"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,BaseController,MessageToast,swalJS) {
        "use strict";

        return BaseController.extend("nav.medium.controller.Main", {
            onInit: function () {
                swal.fire("Main View");

            },
            
             
            onTilePress: function (oEvent) {
              var oTile = oEvent.getSource();
              var sTileTitle = oTile.getTitle();
              Swal.fire({
                position: "bottom",
                icon: "success",
                html: sTileTitle,
                showConfirmButton: false,
                toast: true,
                timer: 2000,
            });
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
