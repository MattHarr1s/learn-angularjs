// MODULE
//Name of module goes in [], as seen below. For example ['ngMessages', 'ngMaps', 'etc']
var myApp = angular.module('myApp',['ngMessages']);

// CONTROLLERS
myApp.controller('mainController', function($scope, $log, $filter) {

	$scope.name ='John';
	$scope.formattedname = $filter('uppercase')($scope.name);

	$log.info($scope.name);
	$log.info($scope.formattedname);
});


