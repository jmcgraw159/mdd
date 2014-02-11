'use strict';

/*global Firebase */
var App = angular.module('mddProjectApp', [
  'ngRoute',
  'firebase'
]);

App.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.tpl',
        controller: 'MainCtrl'
      })
      .when('/detail/:id', {
        templateUrl : 'views/detail.tpl',
        controller : 'DetailCtrl'
      })
      .when('/admin', {
        templateUrl : 'views/admin.tpl',
        controller : 'AdminCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

App.run(['$firebaseSimpleLogin', '$rootScope', function ($firebaseSimpleLogin, $rootScope)  {

  var db = new Firebase('https://jmportfolio.firebaseio.com/');

  $rootScope.loginObject = $firebaseSimpleLogin(db);

}]);
