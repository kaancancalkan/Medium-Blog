sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel'
    ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller ,JSONModel) {
        "use strict";

        return Controller.extend("fitness.weights.controller.Main", {
            onInit: function () {
                var oModel = this.getOwnerComponent().getModel("UpperBody");
                oModel.loadData(sap.ui.require.toUrl("fitness/weights/model/UpperBody.json"));
                
                var oModel2 = this.getOwnerComponent().getModel("LowerBody")
                oModel2.loadData(sap.ui.require.toUrl("fitness/weights/model/LowerBody.json"))
                

                
            },
            onSearch: function () {
                var aFilters = [];
                var aFilters2 = [];
                var aSelectedItems = this.byId("UpperBodyName").getSelectedItems();
                for (var i = 0; i < aSelectedItems.length; i++) {
                  var sValue = aSelectedItems[i].getKey();
                  var oFilter = new sap.ui.model.Filter(
                    "Name",
                    sap.ui.model.FilterOperator.EQ,
                    sValue
                  );
                  aFilters.push(oFilter);
                }
                var a2SelectedItems = this.byId("UpperBodyMuscleGroup").getSelectedItems();
                for (var i = 0; i < a2SelectedItems.length; i++) {
                  var sValue = a2SelectedItems[i].getKey();
                  var oFilter = new sap.ui.model.Filter(
                    "Muscle Group",
                    sap.ui.model.FilterOperator.EQ,
                    sValue
                  );
                  aFilters.push(oFilter);
                }
                var a3SelectedItems = this.byId("UpperBodyWeights").getSelectedItems();
                for (var i = 0; i < a3SelectedItems.length; i++) {
                  var sValue = a3SelectedItems[i].getKey();
                  var oFilter = new sap.ui.model.Filter(
                    "Weights",
                    sap.ui.model.FilterOperator.EQ,
                    sValue
                  );
                  aFilters.push(oFilter);
                }
                var a4SelectedItems = this.byId("LowerBodyName").getSelectedItems();
                for (var i = 0; i < a4SelectedItems.length; i++) {
                  var sValue = a4SelectedItems[i].getKey();
                  var oFilter = new sap.ui.model.Filter(
                    "Name",
                    sap.ui.model.FilterOperator.EQ,
                    sValue
                  );
                  aFilters2.push(oFilter);
                }
                var a5SelectedItems = this.byId("LowerBodyWeights").getSelectedItems();
                for (var i = 0; i < a5SelectedItems.length; i++) {
                  var sValue = a5SelectedItems[i].getKey();
                  var oFilter = new sap.ui.model.Filter(
                    "Weights",
                    sap.ui.model.FilterOperator.EQ,
                    sValue
                  );
                  aFilters2.push(oFilter);
                }
                var a6SelectedItems = this.byId("LowerBodyRepsandSets").getSelectedItems();
                for (var i = 0; i < a6SelectedItems.length; i++) {
                  var sValue = a6SelectedItems[i].getKey();
                  var oFilter = new sap.ui.model.Filter(
                    "Reps and Sets",
                    sap.ui.model.FilterOperator.EQ,
                    sValue
                  );
                  aFilters2.push(oFilter);
                }
        
                var oTable = this.byId("ExerciseTable");
                var oTable2 = this.byId("ExerciseTable2");
                var oBinding = oTable.getBinding("items");
                var oBinding2 = oTable2.getBinding("items");
                oBinding.filter(aFilters);
                oBinding2.filter(aFilters2);
              },


              ClearFilterbar: function () {
       
                var oFilterModel = this.getView().getModel("Filter");
                oFilterModel.setProperty("/Names", []);
                oFilterModel.setProperty("/Weights", []);
                oFilterModel.setProperty("/Reps and Sets", []);
                oFilterModel.setProperty("/MuscleGroup", []);
        
        }
        });
    });
