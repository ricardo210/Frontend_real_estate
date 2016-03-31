angular.module('RealEstate.Controllers')
  .controller('adminController', ['$scope', 'adminService', '$sessionStorage', function ($scope, adminService, $sessionStorage) {
  $scope.title = "Usuarios"
  $scope.users = [];
  $scope.user = {};
  $scope.user2 = {};
  $scope.user3 = {};

$scope.postUserA = function(){
  $scope.user.scope="admin";
  adminService.PostUsers($scope.user).then(function(response){
      alert("Posted to /admin");
      clearCAdmin();
    }).catch(function(err){
      alert(err.data.error + " " + err.data.message);
    });
  }

  $scope.postUserE = function(){
    $scope.user3.scope="employee";
    adminService.PostUsers($scope.user3).then(function(response){
        alert("Posted to /empleados");
        clear();
      }).catch(function(err){
        alert(err.data.error + " " + err.data.message);
      });
    }


      $scope.getUsers = function(){
        adminService.GetUsers().then(function(response){
          $scope.users = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });
      }

      $scope.updateUser = function(item){
      $scope.user2={codigo:item}
      adminService.UpdateUsers($scope.user2).then(function(response){
        alert("update user completed");
        $scope.getUsers();
      }).catch(function(err){
        alert(err.data.error + " " + err.data.message);
      });
    }

      $scope.deleteUser= function(item){
      adminService.DeleteUser(item,item._id).then(function(response){
        alert("Deleted");
        $scope.getUsers();
      }).catch(function(err){
        alert(err.data.error + " " + err.data.message);
      });
    }

    clear = function(){
      $('#idAdminHTML').val("");
      $('#userAdminHTML').val("");
      $('#passwordAdminHTML').val("");
      $('#nameAdminHTML').val("");
      $('#celAdminHTML').val("");
      $('#numberAdminHTML').val("");
      $('#emailAdminHTML').val("");
      $('#direccionAdminHTML').val("");
    }

    clearCAdmin = function(){
      $('#idCAdminHtml').val("");
      $('#userCAdminHtml').val("");
      $('#passwordCAdminHtml').val("");
      $('#nameCAdminHtml').val("");
    }

    $scope.reloadPage = function () {
      window.location.reload(true);
    }
  }]);
