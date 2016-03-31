angular.module('RealEstate.Services').factory('advertiserService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'https://proyecto-backend-2017.herokuapp.com/';
		return {
			GetProperties: function(){
					return $http.get(baseUrl + "v1/properties");
				},
				PostProperty: function(payload){
					return $http.post(baseUrl + "v1/newproperty", payload);
				},
				UpdateProperty: function(payload,item){
					return $http.put(baseUrl + "v1/updateproperty/"+item.id, payload);
				},
				DeleteProperty: function(payload,id){
					return $http.delete(baseUrl + "v1/deleteP/"+id, payload);
				}

	    };
}]);
