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

    this.titleIcon="Recherche icon"
    var icon="http://issou-randomizer.herokuapp.com/issou/icon/random?";


    this.randomIcon = function() {

      this.imgIcon=icon+timeStamp();
      this.titleIcon="Recherche Random";
      this.panelIcon="panel panel-primary"
    }



    //this.idIcon = '1';
    this.submit = function() {
       this.panelIcon="panel panel-success"
       this.imgIcon="http://issou-randomizer.herokuapp.com/issou/icon/"+this.idIcon;
       this.titleIcon="Recherche par ID : #"+this.idIcon;
    }




    function timeStamp(){

      return new Date().getTime();

    }



  });
