'use strict';

angular.module('mddProjectApp')
  .controller('MainCtrl', ['$scope', 'FireConn', function ($scope, FireConn) {

    FireConn.$bind($scope, 'remoteData');

    // $scope.saveData = function () {
    //   $scope.remoteData.activeUser = [{
    //     title:  'test',
    //     imgUrl: 'url'
    //   }, {
    //     title:  'test',
    //     imgUrl: 'url'
    //   }, ];
    // };

    // $scope.saveData = function ()  {
    //   FireConn.$add({title: $scope.portfolio.title, url: $scope.portfolio.url, desc: $scope.portfolio.desc, id: $scope.portfolio.id});
    // };


    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.firecon = FireConn;

  }])

  .controller('DetailCtrl', function ($scope, $routeParams) {
    $scope.IdDisplay = $routeParams.id;
    console.log('Loading detail', $routeParams.id);
  });