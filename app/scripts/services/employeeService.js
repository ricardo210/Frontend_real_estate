angular.module('RealEstate.Services').factory('employeeService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://localhost:8000/';
		return {

	    };
}]);
