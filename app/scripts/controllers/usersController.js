angular.module('RealEstate.Controllers')
  .controller('UsersController', ['AuthService', '$scope', '$state', '$rootScope', '$sessionStorage',
  	function (authService, $scope, $state, $rootScope, $sessionStorage) {
      $scope.user = {};
      $scope.$sessionStorage = $sessionStorage;
      $scope.title = "Login"

      $scope.logout = function(){
        authService.Logout().then(function(response){
          $sessionStorage.$reset();
          $state.go("login");
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        })
      }

      $scope.login = function(user){
        console.log("entro a login")
        authService.Login(user).then(function(response){
          $sessionStorage.currentUser = response.data;
          $scope.user = {};
          if ($sessionStorage.currentUser.scope[0]==="admin") {
            $scope.goAdmin();
          }else if($sessionStorage.currentUser.scope[0]==="employee"){
            $scope.goEmployee();
          }else if($sessionStorage.currentUser.scope[0]==="advertiser"){
            $scope.goAdvertiser();
          }
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }

      $scope.goAdmin =function(){
        $state.go("admin")
      }

      $scope.goEmployee =function(){
        $state.go("employee")
      }

      $scope.goAdvertiser =function(){
        $state.go("advertiser")
      }

  }]);
