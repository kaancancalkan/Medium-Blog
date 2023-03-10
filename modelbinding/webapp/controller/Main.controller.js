sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/MessageToast",
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (
    Controller,
    JSONModel,
    Fragment,
    Filter,
    FilterOperator,
    MessageToast
  ) {
    "use strict";

    return Controller.extend("modelbinding.modelbinding.controller.Main", {
      _aFollowers: [
        { FollowersCode: "001", FollowersName: "Ali" },
        { FollowersCode: "002", FollowersName: "Veli" },
        { FollowersCode: "003", FollowersName: "Zeynep" },
      ],
      onInit: function () {
        var oMainModel = this.getOwnerComponent().getModel("main");
        oMainModel.setProperty("/Followers", this._aFollowers);
      },
      onValueHelpRequest: function (oEvent) {
        var sInputValue = oEvent.getSource().getValue(),
          oView = this.getView();

        if (!this._pValueHelpDialog) {
          console.log(!this._pValueHelpDialog);
          this._pValueHelpDialog = Fragment.load({
            id: oView.getId(),
            name: "modelbinding.modelbinding.fragments.ValueHelpDialog",
            controller: this,
          }).then(function (oDialog) {
            oView.addDependent(oDialog);
            return oDialog;
          });
        }
        var _this = this;
        this._pValueHelpDialog.then(function (oDialog) {
          // Create a filter for the binding
          oDialog
            .getBinding("items")
            .filter([
              new Filter("FollowersName", FilterOperator.Contains, sInputValue),
            ]);
          // Open ValueHelpDialog filtered by the input's value
          oDialog.setModel("main", _this.getView().getModel("main"));
          oDialog.setModel("i18n", _this.getView().getModel("i18n"));
          oDialog.open(sInputValue);
        });
      },
      onValueHelpSearch: function (oEvent) {
        var sValue = oEvent.getParameter("value");
        var oFilter = new Filter("Name", FilterOperator.Contains, sValue);

        oEvent.getSource().getBinding("items").filter([oFilter]);
      },

      onValueHelpClose: function (oEvent) {
        var oSelectedItem = oEvent.getParameter("selectedItem");
        oEvent.getSource().getBinding("items").filter([]);

        if (!oSelectedItem) {
          return;
        }
        var oMainModel = this.getView().getModel("main");
        oMainModel.setProperty("/FollowersCode", oSelectedItem.getTitle());
      },
      onButtonPress: function (oEvent) {
        var oMainModel = this.getView().getModel("main");
        var sFollowersCode = oMainModel.getProperty("/FollowersCode");
        if (sFollowersCode) {
          sap.m.MessageToast.show(
            "Followers Code" + sFollowersCode + "Has Been Sent"
          );
        }
      },
    });
  }
);
