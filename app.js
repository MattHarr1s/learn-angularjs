// MODULE
var myApp = angular.module('myApp',[]);

// CONTROLLERS
myApp.controller('mainController', function($scope,$log, $filter) {

	$log.log("Hello.");
	$log.info("This is some information.");
	$log.warn("Warning!");
	$log.error("This was an Error!");
});


