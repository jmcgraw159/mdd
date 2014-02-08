'use strict';

angular.module('mddProjectApp')
  .controller('DetailCtrl', ['$scope', '$routeParams', 'FireConn', function ($scope, $routeParams, FireConn) {

    $scope.article = FireConn.$child($routeParams.id);

  }]);
