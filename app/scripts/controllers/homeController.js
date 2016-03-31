angular.module('RealEstate.Controllers')
.controller('homeController', ['$scope', 'homeService', '$sessionStorage', '$state',function ($scope, homeService, $sessionStorage, $state) {
  $scope.properties = [];
  $scope.property = {};


  $scope.getProperty = function(){
    homeService.GetProperty().then(function(response){
      $scope.properties = response.data;
    }).catch(function(err){
      alert(err.data.error + " " + err.data.message)
    });
  }

  $scope.changeStateLogIn = function () {
    $state.go('logIn');
  }
}]);
