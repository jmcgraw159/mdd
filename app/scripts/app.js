'use strict';

angular.module('mddProjectApp', [
  'ngRoute',
  'firebase'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.tpl',
        controller: 'MainCtrl'
      })
      .when('/detail/:id', {
        templateUrl : 'views/detail.tpl',
        controller : 'DetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
