angular.module('RealEstate.Controllers')
  .controller('advertiserController', ['$scope', 'advertiserService', '$sessionStorage', function ($scope, advertiserService, $sessionStorage) {
    $scope.reloadPage = function () {
      window.location.reload(true);
    }
  }]);
