// MODULE
//Name of module goes in [], as seen below. For example ['ngMessages', 'ngMaps', 'etc']
var myApp = angular.module('myApp',[]);

// CONTROLLERS
myApp.controller('mainController', ['$scope', '$filter', '$timeout', function($scope, $filter, $timeout) {

	$scope.handle = '';

	$scope.lowercasehandle = function(){
		return $filter('lowercase')($scope.handle);
	};

	$scope.characters = 5;

}]);


