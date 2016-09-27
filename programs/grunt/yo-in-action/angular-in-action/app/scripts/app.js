'use strict';

/**
 * @ngdoc overview
 * @name learnangulaerApp
 * @description
 * # learnangulaerApp
 *
 * Main module of the application.
 */
angular
  .module('learnangulaerApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
