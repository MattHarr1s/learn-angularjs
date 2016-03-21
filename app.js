// MODULE
//Name of module goes in [], as seen below. For example ['ngMessages', 'ngMaps', 'etc']
var myApp = angular.module('myApp',['ngMessages','ngResource']);

// CONTROLLERS
myApp.controller('mainController', function($scope, $log, $filter, $resource) {

		console.log($resource);

});


