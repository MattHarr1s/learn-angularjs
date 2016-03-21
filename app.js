// MODULE
//Name of module goes in [], as seen below. For example ['ngMessages', 'ngMaps', 'etc']
var myApp = angular.module('myApp',[]);

// CONTROLLERS
myApp.controller('mainController', ['$scope', function($scope) {

	$scope.handle = '';

}]);


