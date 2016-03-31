angular.module('RealEstate.Controllers')
.controller('advertiserController', ['$scope', 'advertiserService', '$sessionStorage', function ($scope, advertiserService, $sessionStorage) {
	$scope.title = "Propiedades"
	$scope.properties = [];
	$scope.property = {};

	clear = function(){
		$('#address1').val("");
		$('#name1').val("");
		$('#address2').val("");
		$('#name2').val("");
		$('#address3').val("");
		$('#name3').val("");
		$('#address4').val("");
		$('#name4').val("");
		$('#address5').val("");
		$('#name5').val("");
		$('#address6').val("");
		$('#name6').val("");
	}

	$scope.postHouse = function(){
		$scope.property.type="Casa";
		$scope.property.images="InsertImgURL";
		$scope.property.available="Disponible";
		$scope.property.advertiser = $sessionStorage.currentUser.username[0];

		advertiserService.PostProperty($scope.property).then(function(response){
			alert("Posted to /properties");
		}).catch(function(err){
			alert(err.data.error + " " + err.data.message);
		});
		clear();
	}

	$scope.postApartment = function(){
		$scope.property.type="Apartamento";
		$scope.property.images="InsertImgURL";
		$scope.property.available="Disponible";
		$scope.property.advertiser = $sessionStorage.currentUser.username[0];

		advertiserService.PostProperty($scope.property).then(function(response){
			alert("Posted to /properties");
		}).catch(function(err){
			alert(err.data.error + " " + err.data.message);
		});
		clear();
	}

	$scope.postCondo = function(){
		$scope.property.type="Condominio";
		$scope.property.images="InsertImgURL";
		$scope.property.available="Disponible";
		$scope.property.advertiser = $sessionStorage.currentUser.username[0];

		advertiserService.PostProperty($scope.property).then(function(response){
			alert("Posted to /properties");
		}).catch(function(err){
			alert(err.data.error + " " + err.data.message);
		});
		clear();
	}

	$scope.postTerrain = function(){
		$scope.property.type="Propiedad";
		$scope.property.images="InsertImgURL";
		$scope.property.available="Disponible";
		$scope.property.advertiser = $sessionStorage.currentUser.username[0];

		advertiserService.PostProperty($scope.property).then(function(response){
			alert("Posted to /properties");
		}).catch(function(err){
			alert(err.data.error + " " + err.data.message);
		});
		clear();
	}

	$scope.postLocal = function(){
		$scope.property.type="Local";
		$scope.property.images="InsertImgURL";
		$scope.property.available="Disponible";
		$scope.property.advertiser = $sessionStorage.currentUser.username[0];

		advertiserService.PostProperty($scope.property).then(function(response){
			alert("Posted to /properties");
		}).catch(function(err){
			alert(err.data.error + " " + err.data.message);
		});
		clear();
	}

	$scope.postStorage = function(){
		$scope.property.type="Bodega";
		$scope.property.images="InsertImgURL";
		$scope.property.available="Disponible";
		$scope.property.advertiser = $sessionStorage.currentUser.username[0];

		advertiserService.PostProperty($scope.property).then(function(response){
			alert("Posted to /properties");
		}).catch(function(err){
			alert(err.data.error + " " + err.data.message);
		});
		clear();
	}



	$scope.getProperty = function(){
		advertiserService.GetProperties().then(function(response){
			$scope.properties = response.data;
		}).catch(function(err){
			alert(err.data.error + " " + err.data.message)
		});
		clear();
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
		$scope.property=item;
		$scope.property.type="Casa";
		$scope.property.images="InsertImgURL";
		$scope.property.advertiser = $sessionStorage.currentUser.username[0];
	
      advertiserService.UpdateProperty(item).then(function(response){
        alert("update user completed");
        $scope.getProperty();
      }).catch(function(err){
        alert(err.data.error + " " + err.data.message);
      });

    }

    $scope.updateApartment = function(item){
		$scope.property.type="Apartamento";
		$scope.property.images="InsertImgURL";
    	  $scope.property={_id:item}
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
