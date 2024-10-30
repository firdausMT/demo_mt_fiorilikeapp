sap.ui.define(
    ['sap/ui/core/UIComponent'],
    function(UIComponent){
        return UIComponent.extend('mt.fin.ap.fk.Component',{
            metadata: {
                manifest: "json"
            },
            init : function(){
                //super->constructor()
                //we will call the base class constructor
                UIComponent.prototype.init.apply(this);
                this.getRouter().initialize();
            },
            /*createContent: function(){
               
                var oAppView = new sap.ui.view({
                    id: "idAppView",
                    viewName: "mt.fin.ap.fk.view.App",
                    type: "XML"
                });

                //From the root view object get the container object
                var oAppCon = oAppView.byId("idAppCon");

                //Create child view objects
                var oView1 = new sap.ui.view({
                    id: "idView1",
                    viewName: "mt.fin.ap.fk.view.View1",
                    type: "XML"
                });

                var oView2 = new sap.ui.view({
                    id: "idView2",
                    viewName: "mt.fin.ap.fk.view.View2",
                    type: "XML"
                });

                //oAppCon.addPage(oView1).addPage(oView2);
                oAppCon.addMasterPage(oView1).addDetailPage(oView2);

                return oAppView;

            },*/
            destroy: function(){

            }
        });
});