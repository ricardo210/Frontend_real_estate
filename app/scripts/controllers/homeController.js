angular.module('RealEstate.Controllers')
.controller('homeController', ['$scope', 'homeService', '$sessionStorage', '$state',function ($scope, homeService, $sessionStorage, $state) {
  $scope.changeStateLogIn = function () {
    $state.go('logIn');
 }

 $scope.postData = {};

    $scope.postMail = function (contact) {
      // Check form validation
      if ($scope.contactForm.$invalid === true) {
        return
      }
      // wrap all your input values in $scope.postData
      $scope.postData = angular.copy(contact);

      $http.post('/api/contact', $scope.postData)
        .success(function(data) {
          // Show success message
        })
        .error(function(data) {
          // Show error message
        });
    };
  }]);
