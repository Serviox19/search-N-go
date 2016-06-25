import { angularMeteor } from 'angular-meteor';

var app = angular.module('startup', ['angular-meteor', 'ui.router']);

app.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'client/views/home.ng.html',
    controller: ''
  })
  .state('second',{
    url: '/two',
    templateUrl: 'client/views/second.ng.html',
    controller: ''
  })

  $locationProvider.html5Mode(true);
}]);
