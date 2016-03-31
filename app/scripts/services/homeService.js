angular.module('RealEstate.Services').factory('homeService', ['$http',
function($http){
	$http.defaults.withCredentials = true;
	var baseUrl = 'https://proyecto-frontend-2017.herokuapp.com/';
	return {

	}
}]);
