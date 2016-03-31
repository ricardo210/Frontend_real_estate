angular.module('RealEstate.Services').factory('homeService', ['$http',
<<<<<<< HEAD
function($http){
	$http.defaults.withCredentials = true;
	var baseUrl = 'https://proyecto-frontend-2017.herokuapp.com/';
	return {
		GetProperty: function(){
				return $http.get(baseUrl + "v1/properties");
		}
	}
}]);
