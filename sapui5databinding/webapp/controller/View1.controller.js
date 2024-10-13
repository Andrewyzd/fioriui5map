sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, JSONModel, ResourceModel) {
        "use strict";

        return Controller.extend("sapui5databinding.controller.View1", {
            onInit: function () {
                //crate data object
                var oData = {
                    name : {
                        firstname:"Andrew Yong",
                        lastname:"Zheng Dao",
                        enabled:true
                    }
                };

                var oModel = new JSONModel(oData);

                this.getView().setModel(oModel);

                //set i18n model on view
                const i18nModel = new ResourceModel(
                    { bundleName: "sapui5databinding.i18n.i18n" } //this path need to follow the Controller.extend()
                );
                
                this.getView().setModel(i18nModel, "i18n");

            },

            onShowHello(){
                const oBundle = this.getView().getModel("i18n").getResourceBundle();
                const sReceipient = this.getView().getModel().getProperty("/name/firstname");
                const sMsg = oBundle.getText("showHelloButtonText");
                let nMsg = sMsg + ' ' + sReceipient;
                //show Message
                MessageToast.show(nMsg);
            },

            onNextPress(){
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("mapview");
            }


        });
    });
