angular.module('RealEstate.Controllers')
.controller('advertiserController', ['$scope', 'advertiserService', '$sessionStorage', function ($scope, advertiserService, $sessionStorage) {
	$scope.title = "Propiedades"
	$scope.properties = [];
	$scope.property = {};

	$scope.postHouse = function(){
		$scope.property.type="Casa";
		$scope.property.images="InsertImgURL";

		advertiserService.PostProperty($scope.property).then(function(response){
			alert("Posted to /properties");
		}).catch(function(err){
			alert(err.data.error + " " + err.data.message);
		});
	}

	$scope.postApartment = function(){
		$scope.property.type="Apartamento";
		$scope.property.images="InsertImgURL";

		advertiserService.PostProperty($scope.property).then(function(response){
			alert("Posted to /properties");
		}).catch(function(err){
			alert(err.data.error + " " + err.data.message);
		});
	}

	$scope.postCondo = function(){
		$scope.property.type="Condominio";
		$scope.property.images="InsertImgURL";

		advertiserService.PostProperty($scope.property).then(function(response){
			alert("Posted to /properties");
		}).catch(function(err){
			alert(err.data.error + " " + err.data.message);
		});
	}

	$scope.postTerrain = function(){
		$scope.property.type="Propiedad";
		$scope.property.images="InsertImgURL";

		advertiserService.PostProperty($scope.property).then(function(response){
			alert("Posted to /properties");
		}).catch(function(err){
			alert(err.data.error + " " + err.data.message);
		});
	}

	$scope.postLocal = function(){
		$scope.property.type="Local";
		$scope.property.images="InsertImgURL";

		advertiserService.PostProperty($scope.property).then(function(response){
			alert("Posted to /properties");
		}).catch(function(err){
			alert(err.data.error + " " + err.data.message);
		});
	}

	$scope.postStorage = function(){
		$scope.property.type="Bodega";
		$scope.property.images="InsertImgURL";

		advertiserService.PostProperty($scope.property).then(function(response){
			alert("Posted to /properties");
		}).catch(function(err){
			alert(err.data.error + " " + err.data.message);
		});
	}



	$scope.getProperty = function(){
		advertiserService.GetProperties().then(function(response){
			$scope.properties = response.data;
		}).catch(function(err){
			alert(err.data.error + " " + err.data.message)
		});
	}


	 $scope.updateProperty = function(item){
      $scope.property={codigo:item}
      advertiserService.UpdateProperty($scope.property).then(function(response){
        alert("update user completed");
        $scope.getProperty();
      }).catch(function(err){
        alert(err.data.error + " " + err.data.message);
      });
    }

    $scope.updateHouse = function(item){
		item.type="Casa";
		item.images="InsertImgURL";
    	$scope.property={codigo:item}
      advertiserService.UpdateProperty($scope.property).then(function(response){
        alert("update user completed");
        $scope.getProperty();
      }).catch(function(err){
        alert(err.data.error + " " + err.data.message);
      });
    }

    $scope.updateApartment = function(item){
		$scope.property.type="Apartamento";
		$scope.property.images="InsertImgURL";
    	  $scope.property={codigo:item}
      advertiserService.UpdateProperty($scope.property).then(function(response){
        alert("update user completed");
        $scope.getProperty();
      }).catch(function(err){
        alert(err.data.error + " " + err.data.message);
      });
    }

    $scope.updateCondo = function(item){
		$scope.property.type="Condominio";
		$scope.property.images="InsertImgURL";
    	  $scope.property={codigo:item}
      advertiserService.UpdateProperty($scope.property).then(function(response){
        alert("update user completed");
        $scope.getProperty();
      }).catch(function(err){
        alert(err.data.error + " " + err.data.message);
      });
    }

    $scope.updateTerrain = function(item){
		$scope.property.type="Propiedad";
		$scope.property.images="InsertImgURL";
    	  $scope.property={codigo:item}
      advertiserService.UpdateProperty($scope.property).then(function(response){
        alert("update user completed");
        $scope.getProperty();
      }).catch(function(err){
        alert(err.data.error + " " + err.data.message);
      });
    }

    $scope.updateLocal = function(item){
		$scope.property.type="Local";
		$scope.property.images="InsertImgURL";
    	  $scope.property={codigo:item}
      advertiserService.UpdateProperty($scope.property).then(function(response){
        alert("update user completed");
        $scope.getProperty();
      }).catch(function(err){
        alert(err.data.error + " " + err.data.message);
      });
    }

    $scope.updateStorage = function(item){
		$scope.property.type="Bodega";
		$scope.property.images="InsertImgURL";
    	  $scope.property={codigo:item}
      advertiserService.UpdateProperty($scope.property).then(function(response){
        alert("update user completed");
        $scope.getProperty();
      }).catch(function(err){
        alert(err.data.error + " " + err.data.message);
      });
    }

      $scope.deleteProperty= function(item){
      advertiserService.DeleteProperty(item,item._id).then(function(response){
        alert("Deleted");
        $scope.getProperty();
      }).catch(function(err){
        alert(err.data.error + " " + err.data.message);
      });
    }

	$scope.reloadPage = function () {
		window.location.reload(true);
	}



}]);
