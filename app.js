// MODULE
//Name of module goes in [], as seen below. For example ['ngMessages', 'ngMaps', 'etc']
var myApp = angular.module('myApp',[]);

// CONTROLLERS
myApp.controller('mainController', ['$scope', '$filter', '$http', function($scope, $filter, $http) {

	$scope.handle = '';

	$scope.lowercasehandle = function(){
		return $filter('lowercase')($scope.handle);
	};

	$scope.characters = 5;

	$http.get('/api')
		.success(function(result){
			$scope.rules = result;

		})
		.error(fucntion(data, status){

		console.log(data);
	})

}]);


