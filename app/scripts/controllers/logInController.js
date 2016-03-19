angular.module('RealEstate.Controllers')
.controller('logInController', ['$scope', 'logInService', '$sessionStorage', '$state',function ($scope, logInService, $sessionStorage, $state) {
  $scope.changeStateHome = function () {
    $state.go('home');
 }
 $scope.changeStateAdmin = function () {
   $state.go('admin');
}
  }]);
