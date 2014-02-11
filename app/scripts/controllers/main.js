'use strict';

angular.module('mddProjectApp')
  .controller('MainCtrl', ['$scope', 'FireConn', function ($scope, FireConn) {

    FireConn.$bind($scope, 'remoteData');

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.remoteData = FireConn;

  }]);