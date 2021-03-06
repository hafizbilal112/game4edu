'use strict';

/**
 * @ngdoc overview
 * @name TestIonicGenerator
 * @description
 * # Initializes main application and routing
 *
 * Main module of the application.
 */


angular.module('TestIonicGenerator', [
  'ionic',
  'ngCordova',
  'ngResource',
  'chart.js'
])

  .run(function ($ionicPlatform) {

    $ionicPlatform.ready(function () {
      // save to use plugins here
    });

    // add possible global event handlers here

  })

  .config(function ($httpProvider, $stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.tabs.style('striped');
    $ionicConfigProvider.tabs.position('top');
    $ionicConfigProvider.navBar.alignTitle('left');
    $ionicConfigProvider.form.toggle('small');
    $ionicConfigProvider.form.checkbox('square');
    $ionicConfigProvider.spinner.icon('spiral');
    // register $http interceptors, if any. e.g.
    // $httpProvider.interceptors.push('interceptor-name');

    // Application routing
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/main.html',
        controller: 'MainController'
      })
      .state('app.home', {
        url: '/home',
        cache: true,
        views: {
          'homeContent': {
            templateUrl: 'templates/views/home.html',
            controller: 'HomeController'
          }
        }
      })
      .state('app.score', {
        url: '/score',
        cache: true,
        views: {
          'scoreContent': {
            templateUrl: 'templates/views/score.html',
            controller: 'ScoreController'
          }
        }
      })
      .state('app.setting', {
        url: '/setting',
        cache: true,
        views: {
          'settingContent': {
            templateUrl: 'templates/views/setting.html',
            controller: 'SettingController'
          }
        }
      })
      .state('game:ignoreColorCombination', {
        url: '/ignoreColorCombination',
        cache: false,
        templateUrl: 'templates/games/ignoreColorCombination.html',
        controller: 'ignoreColorCombinationCtrl'
      })
      .state('game:chooseMissingSign', {
        url: '/chooseMissingSign',
        cache: false,
        templateUrl: 'templates/games/chooseMissingSign.html',
        controller: 'chooseMissingSignCtrl'
      })
    ;


// redirects to default route for undefined routes
    $urlRouterProvider.otherwise('/app/home');
  })
;


