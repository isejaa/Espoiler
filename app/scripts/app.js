angular.module('Espoiler', ['ngRoute', 'ngResource', 'ngCookies','mgcrea.ngStrap'])
  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    'use strict';
    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainController'
    })
    .when('/shows/:id', {
        templateUrl: 'views/detail.html',
        controller: 'DetailController'
    })
    .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
    })
    .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupController'
    })
    .when('/add', {
        templateUrl: 'views/add.html',
        controller: 'AddController'
    })
    .otherwise({
        redirectTo: '/'
    });

}]);