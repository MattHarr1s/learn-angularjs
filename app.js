// MODULE
var myApp = angular.module('myApp',[]);

// CONTROLLERS
myApp.controller('mainController', function($scope) {

});

var searchPeople = function searchPeople(firstName, lastName, height, age, occupation){
	return 'Jane Doe';
};

console.log(angular.injector().annotate(searchPeople));
