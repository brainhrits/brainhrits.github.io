'use strict';

var app = angular.module('app.layout',['smoothScroll', 'ngDialog']);

app.controller('layoutController',function($scope, ngDialog){
  $scope.openLoginPage = function () {
    ngDialog.open({
      template: 'login/login.html',
      className: 'ngdialog-theme-default'
    });
  };
});

app.directive('bhrBanner',function() {
  return {
    restrict: 'AE',
    templateUrl: '/client/layout/bhrBanner.html'
  };
});

app.directive('contentNavBar',function() {
  return {
    restrict: 'AE',
    templateUrl: '/client/layout/contentNavBar.html'
  };
});

app.directive('socialNavBar',function() {
  return {
    restrict: 'AE',
    templateUrl: '/client/layout/socialNavBar.html'
  };
});

app.directive('indexFooter',function() {
  return {
    restrict: 'AE',
    templateUrl: '/client/layout/footer.html'
  };
});
