angular.module('RealEstate.Controllers')
  .controller('adminController', ['$scope', 'adminService', '$sessionStorage', function ($scope, adminService, $sessionStorage) {
    $scope.reloadPage = function () {
      window.location.reload(true);
    }
  }]);
