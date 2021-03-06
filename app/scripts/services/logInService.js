angular.module('RealEstate.Services').factory('logInService', ['$http',
function($http){
	$http.defaults.withCredentials = true;
	var baseUrl = 'https://proyecto-backend-2017.herokuapp.com/';
	return {
		Logout: function(){
			return $http.get(baseUrl +"v1/logout");
		},
		Login: function(payload){
			return $http.post(baseUrl +"v1/login", payload);
		}
	};
}]);
