angular.module('RealEstate.Services').factory('employeeService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://localhost:8000/';
		return {
			GetMessages: function(){
				return $http.get(baseUrl + "v1/load-message");
			},

			PostMessages: function(payload){
				return $http.post(baseUrl + "v1/send-message", payload);
			},

			PostUsers: function(payload){
				return $http.post(baseUrl + "v1/register", payload);
			},
			
			UpdateMessages: function(payload){
				return $http.post(baseUrl + "v1/read-message", payload);
			}
	    };
}]);
