'use strict';

var app = angular.module('app.aboutUs',[]);

app.directive('aboutUs',function() {
  return {
    restrict: 'AE',
    templateUrl: '/client/aboutUs/aboutUs.html'
  };
});
