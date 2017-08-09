'use strict';

// Declare app level module which depends on views, and components
angular.module('odds', [
  'ngRoute',
  'odds.login',
  'odds.home'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/login'});
}]);
