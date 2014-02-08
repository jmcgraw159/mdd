'use strict';

/*global Firebase */
angular.module('mddProjectApp')
  .factory('FireConn', ['$firebase', function ($firebase) {

    var url = 'https://jmportfolio.firebaseio.com',
      ref = new Firebase(url);

    return $firebase(ref);
  }]);