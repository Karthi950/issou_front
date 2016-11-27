'use strict';

/**
 * @ngdoc function
 * @name issouFrontApp.controller:WallpaperCtrl
 * @description
 * # WallpaperCtrl
 * Controller of the issouFrontApp
 */


angular.module('issouFrontApp')
  .controller('WallpaperCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    var icon="http://issou-randomizer.herokuapp.com/issou/wallpaper/random?";


    this.randomWallPaper = function() {

      this.imgWallpaper=icon+timeStamp();

    }


    function timeStamp(){

      return new Date().getTime();

    }



  });
