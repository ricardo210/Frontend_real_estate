angular.module('RealEstate.Controllers')
.controller('logInController', ['$scope', 'logInService', '$sessionStorage', '$state',function ($scope, logInService, $sessionStorage, $state) {
  $scope.changeStateHome = function () {
    $state.go('home');
 }
 $scope.changeStateAdmin = function () {
   $state.go('admin');
}
$scope.changeStateEmployee = function () {
   $state.go('employee');
}
$scope.changeStateAdvertiser = function () {
   $state.go('advertiser');
}

  }]);
