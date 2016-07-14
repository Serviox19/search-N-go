import { angularMeteor } from 'angular-meteor';

var app = angular.module('startup', ['angular-meteor', 'ui.router']);

app.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'client/views/home.ng.html',
    controller: 'placesSearch'
  })
  .state('placesInfo',{
    url: '/places/:placesId',
    templateUrl: 'client/views/places-details.ng.html',
    controller: 'placesDetails'
  })

  $locationProvider.html5Mode(true);
}]);
