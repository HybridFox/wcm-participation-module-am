"use strict";

(function(angular) {
	angular.module("wcm-participation_0.0.17.factories", []);
	angular.module("wcm-participation_0.0.17.services", ["wcm-participation_0.0.17.factories"]);
	angular.module("wcm-participation_0.0.17.controllers", ["wcm-participation_0.0.17.services"]);
	angular.module("wcm-participation_0.0.17.directives", ["wcm-participation_0.0.17.controllers"]);

	angular.module("wcm-participation_0.0.17", [

		"pelorus.services",

		"wcm-participation_0.0.17.factories",
		"wcm-participation_0.0.17.services",
		"wcm-participation_0.0.17.controllers",
		"wcm-participation_0.0.17.directives",

	])
		.run([function() {
			console.log("Participation module is loaded and available!"); // eslint-disable-line no-console
		}]);
})(window.angular);

