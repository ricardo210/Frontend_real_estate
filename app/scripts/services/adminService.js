angular.module('RealEstate.Services').factory('adminService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://Dell:8000/';
		return {

	    };
}]);
