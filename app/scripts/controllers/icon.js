'use strict';

/**
 * @ngdoc function
 * @name issouFrontApp.controller:IconCtrl
 * @description
 * # IconCtrl
 * Controller of the issouFrontApp
 */
angular.module('issouFrontApp')
  .controller('IconCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    var icon="http://issou-randomizer.herokuapp.com/issou/icon/random?";


    this.randomIcon = function() {

      this.imgIcon=icon+timeStamp();

    }



    this.idIcon = '1';
    this.submit = function() {

       this.imgIconId="http://issou-randomizer.herokuapp.com/issou/icon/"+this.idIcon;
    }




    function timeStamp(){

      return new Date().getTime();

    }



  });
