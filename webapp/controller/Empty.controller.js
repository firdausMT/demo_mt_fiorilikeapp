sap.ui.define([
    "mt/fin/ap/fk/controller/BaseController"
], function(Controller) {
    'use strict';
    return Controller.extend("mt.fin.ap.fk.controller.Empty", {
        onNext: function(){
            //Step 1: get the mother object - app container
            var oAppCon = this.getView().getParent();
            //Step 2: Navigate to next view
            oAppCon.to("idView2");
        }
    });
   
});