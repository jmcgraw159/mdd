'use strict';

angular.module('mddProjectApp')
  .controller('AdminCtrl', ['$scope', 'FireConn', function ($scope, FireConn) {

    FireConn.$bind($scope, 'remoteData');

    $scope.saveData = function ()  {
      FireConn.$add({title: $scope.portfolio.title, url: $scope.portfolio.url, desc: $scope.portfolio.desc});
    };

    $scope.remoteData = FireConn;


  }]);