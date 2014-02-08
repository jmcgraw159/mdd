'use strict';

angular.module('mddProjectApp')
  .controller('MainCtrl', ['$scope', 'FireConn', function ($scope, FireConn) {

    FireConn.$bind($scope, 'remoteData');

    // $scope.saveData = function ()  {
    //   FireConn.$add({title: $scope.portfolio.title, url: $scope.portfolio.url, desc: $scope.portfolio.desc, id: $scope.portfolio.id});
    // };


    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // $scope.firecon = FireConn;

    $scope.remoteData = FireConn;


  }]);