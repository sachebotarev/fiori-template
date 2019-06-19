sap.ui.define([
	"sap/ui/core/UIComponent"
], function (UIComponent) {
	"use strict";

	return UIComponent.extend("zfiori.template.Component", {

		metadata: {
			manifest: "json"
		},

		init: function () {
			jQuery.sap.log.setLevel(jQuery.sap.log.Level.DEBUG);
            UIComponent.prototype.init.apply(this, arguments);
			this.getRouter().initialize();
		}

	});
});
