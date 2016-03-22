var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){

	$routeProvider

	.when('/',{
		templateUrl: 'pages/main.html',
		controller:'mainController'
	})

	.when('/second/:num',{
		templateUrl: 'pages/second.html',
		controller:'secondController'

	})
});

myApp.service('nameService', function(){

	var self= this;
	this.name='John Doe';

	this.namelength = function(){
		self.name.length;
	};
});

myApp.controller('mainController', ['$scope', $log, 'nameService', function($scope, $log, nameService) {

	$scope.name='Main';

	$log.log(nameService.name);
	$log.log(nameService.namelength);

    
}]);

myApp.controller('secondController', ['$scope', function($scope) {



}]);
