angular.module('RealEstate.Controllers')
  .controller('employeeController', ['$scope', 'employeeService', '$sessionStorage', function ($scope, employeeService, $sessionStorage) {

    $scope.title = "Mensajes"
    $scope.messages = [];
    $scope.message = {};
    $scope.temp = {};
    $scope.title = "Usuarios"
    $scope.users = [];
    $scope.user = {};

        $scope.getMessage = function(){
          employeeService.GetMessages().then(function(response){
            $scope.messages = response.data;
          }).catch(function(err){
            alert(err.data.error + " " + err.data.message)
          });
        }

        $scope.postMessage = function(){
          $scope.message.state="NO LEÍDO";
          employeeService.PostMessages($scope.message).then(function(response){
              alert("Posted to /mail");
              clear();
            }).catch(function(err){
              alert(err.data.error + " " + err.data.message);
            });
          }

          $scope.ponerModMensaje =function(object){
            $scope.mensajeRecibido={
              id : object._id,
              state : object.state,
              name: object.name,
              email: object.email,
              number: object.number,
              message: object.message
            }
            $scope.temp=$scope.mensajeRecibido;
          }

          $scope.updateMessage = function(){
            employeeService.UpdateMessages($scope.temp).then(function(response){
              alert("message read completed");
              $scope.getMessage();
            }).catch(function(err){
              alert(err.data.error + " " + err.data.message);
            });
          }

          clear = function(){
            $('#nameEmailHtml').val("");
            $('#emailEmailHtml').val("");
            $('#numberEmailHtml').val("");
            $('#messageEmailHtml').val("");
          }

          $scope.postUser = function(){
            $scope.user.scope="advertiser";
            employeeService.PostUsers($scope.user).then(function(response){
                alert("Posted to /Employee");
                clearEmployee();
              }).catch(function(err){
                alert(err.data.error + " " + err.data.message);
              });
            }

            clearEmployee = function(){
              $('#idEmployeHTML').val("");
              $('#userEmployeHTML').val("");
              $('#passwordEmployeHTML').val("");
              $('#nameEmployeHTML').val("");
              $('#celEmployeHTML').val("");
              $('#numberEmployeHTML').val("");
              $('#emailEmployeHTML').val("");
              $('#direccionEmployeHTML').val("");

            }


      $scope.reloadPage = function () {
        window.location.reload(true);
      }
  }]);
