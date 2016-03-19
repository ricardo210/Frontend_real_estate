angular.module('RealEstate.Controllers')
  .controller('employeeController', ['$scope', 'employeeService', '$sessionStorage', function ($scope, employeeService, $sessionStorage) {
    $scope.reloadPage = function () {
      window.location.reload(true);
    }
  }]);
