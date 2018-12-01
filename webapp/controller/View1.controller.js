sap.ui.define(['sap/ui/core/mvc/Controller', 'sap/ui/model/json/JSONModel', 'sap/m/MessageToast'],
	function (Controller, JSONModel, MessageToast) {
		"use strict";

		return Controller.extend("ovly.desafio_2.controller.View1", {

			onPress: function (oEvent) {

				var newValue = this.byId("cepInput");

				var oData = `https://viacep.com.br/ws/${newValue.mProperties.value}/json/`;

				var oModel = new JSONModel(oData);

				this.model = oModel;

				this.model.attachEvent("requestCompleted", this.onRequestComplete);

				this.getView().setModel(oModel);

			},

			onRequestComplete: function (oEvent) {

				if (!oEvent.getParameters().success || this.oData.erro) {
					MessageToast.show("CEP não encontrado");
				}
			}

		});

	});