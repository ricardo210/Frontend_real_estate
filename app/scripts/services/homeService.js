angular.module('RealEstate.Services').factory('homeService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://localhost:8000/';
		return {
					GetProperty: function(){
							return $http.get(baseUrl + "v1/properties");
					}
	    };
}]);
