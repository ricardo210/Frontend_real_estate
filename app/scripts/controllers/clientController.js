angular.module('RealEstate.Controllers')
  .controller('clientController', ['$scope', 'clientService', '$sessionStorage', function ($scope, clientService, $sessionStorage) {
    $scope.reloadPage = function () {
      window.location.reload(true);
    }
  }]);
