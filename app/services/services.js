(function () {

	var app = angular.module('app-services', []);

	app.factory('appService', [
		'$http',
		function ($http) {
			return function appService() {
				
				var url = 'app/json/posts.json',
					successCallback = function (response) {
						// console.log('success.');
						return response.data;
					},
					errorCallback = function (response) {
						// console.log('failure.');
						return response.data;
					};

				return $http.get(url).then(successCallback, errorCallback);

			};
	}]);

})();