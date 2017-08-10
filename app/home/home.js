'use strict';

angular.module('odds.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl',
    controllerAs: 'homeCtrl'
  });
}])

.controller('HomeCtrl', [function() {
	var vm = this;
	vm.users = [
		{firstName: 'John', lastName: 'Doe', username: 'JD123'},
		{firstName: 'Jane', lastName: 'Doe', username: 'JD456'},
		{firstName: 'Peter', lastName: 'Park', username: 'PP123'},
		{firstName: 'Bruce', lastName: 'Wayne', username: 'BW123'},
		{firstName: 'Clark', lastName: 'Kent', username: 'CK123'},
		{firstName: 'Tony', lastName: 'Starks', username: 'TS123'},
		{firstName: 'Steve', lastName: 'Rogers', username: 'SR123'},
		{firstName: 'Leslie', lastName: 'Knope', username: 'LK123'},
		{firstName: 'Elaine', lastName: 'Bennes', username: 'EB123'},
		{firstName: 'Gretchen', lastName: 'Weiner', username: 'GW123'}
	];
}]);
