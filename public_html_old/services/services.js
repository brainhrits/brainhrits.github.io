'use strict';

var app = angular.module('app.services',[]);

app.directive('services',function() {
  return {
    restrict: 'AE',
    templateUrl: '/client/services/services.html'
  };
});
