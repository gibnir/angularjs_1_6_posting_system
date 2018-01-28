(function () {

	var app = angular.module('app-controllers', [
		'app-services',
		'app-directives'
		]);

	app.controller('appController', [
		'appService',
		function (appService) {
			var postList = this;
			postList.posts = [];

			appService().then(function (data) {
				postList.posts = data;
			});
		}]);

})();
