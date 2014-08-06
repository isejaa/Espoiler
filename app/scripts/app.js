require.config({
    baseUrl: '/',
    paths: {
        'jquery': 'bower_components/jquery/jquery',
        'backbone': 'bower_components/backbone/backbone',
        'underscore': 'bower_components/underscore/underscore',
        'handlebars': 'bower_components/handlebars/handlebars',
        'text': 'bower_components/requirejs-text/text'
    },
    shim: {
        'backbone': {
            deps:['underscore','handlebars','jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'handlebars': {
            exports: 'Handlebars'
        }
    }
});

require([
    'jquery',
    'backbone',
    'scripts/router'
], function($, Backbone, Router){
    'use strict';

    new Router();
    Backbone.history.start();
});

/*angular.module('Espoiler', ['ngRoute', 'ngResource', 'ngCookies','mgcrea.ngStrap'])
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

}]);*/