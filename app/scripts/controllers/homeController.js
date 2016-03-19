angular.module('RealEstate.Controllers')
.controller('homeController', ['$scope', 'homeService', '$sessionStorage', '$state',function ($scope, homeService, $sessionStorage, $state) {
  $scope.changeStateLogIn = function () {
    $state.go('logIn');
 }
  }]);
