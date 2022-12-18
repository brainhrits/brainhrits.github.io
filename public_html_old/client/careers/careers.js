'use strict';

var app = angular.module('app.careers',[]);

app.directive('careers',function() {
  return {
    restrict: 'AE',
    templateUrl: '/client/careers/careers.html'
  };
});
