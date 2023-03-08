sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
 
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller,JSONModel,Fragment) {
    "use strict";

    return Controller.extend("fiori.calculator.controller.Main", {
      onInit: function () {
        var oCalculationData ={
            input1:'1',
            input2:'3',
            operator:'+',
            result:'',
            aSelect: [{
                key:'+'
            },
            {
                key:'-'
            },
            {
                key:'/'
            },
            {
                key:'*'
            }]
        },
        oModel = new JSONModel(oCalculationData);
        this.getView().setModel(oModel);
      },
      calculate: function () {
        var oModel =this.getView().getModel(),
        // input1 = this.byId("input1"),
        //   input2 = this.byId("input2"),
        //   operator = this.byId("Operator"),
          sValue = parseInt(oModel.getProperty("/input1"),10),
          sValue2 = parseInt(oModel.getProperty("/input2"),10),
          sOperator = oModel.getProperty("/operator"),
          iResult = 0;
        switch(sOperator){
            case '+':
                iResult = sValue + sValue2;
            break ;
            case '-':
                iResult = sValue -  sValue2;
            break ;  
            case '/':
                iResult = sValue / sValue2;
            break ;  
            case '*':
                iResult = sValue * sValue2;
            break ;      
        }
        oModel.setProperty("/result", iResult);
        // alert("The Result is" + iResult);
      },
      formatResult: function(iResult){
        var oBundle = this.getView().getModel("i18n") && this.getView().getModel("i18n").getResourceBundle();
        if (oBundle) {
          var sResult = oBundle.getText("appResult", [iResult]);
          if (iResult) {
            return sResult;
          }
        }
        return "";
      }
    });
  }
);
