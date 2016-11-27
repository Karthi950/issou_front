'use strict';

/**
 * @ngdoc overview
 * @name issouFrontApp
 * @description
 * # issouFrontApp
 *
 * Main module of the application.
 */
angular
  .module('issouFrontApp', [
    'ngAnimate',
    'ngCookies',
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
      .when('/icon', {
        templateUrl: 'views/icon.html',
        controller: 'IconCtrl',
        controllerAs: 'icon'
      })
      .when('/wallpaper', {
        templateUrl: 'views/wallpaper.html',
        controller: 'WallpaperCtrl',
        controllerAs: 'wallpaper'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
