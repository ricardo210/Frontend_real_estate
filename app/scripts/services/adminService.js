angular.module('RealEstate.Services').factory('adminService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://localhost:8000/';
		return {
				GetUsers: function(){
					return $http.get(baseUrl + "v1/users");
				},
				PostUsers: function(payload){
					return $http.post(baseUrl + "v1/register", payload);
				},
				UpdateUsers: function(payload){
					return $http.post(baseUrl + "v1/update", payload);
				},
				DeleteUser: function(payload,id){
					return $http.delete(baseUrl + "v1/erase/"+id, payload);
				}
	    };
}]);
