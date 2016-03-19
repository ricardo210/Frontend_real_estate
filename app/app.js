var app = angular.module('RealEstate', ['ui.router', 'ngStorage', 'RealEstate.Services', 'RealEstate.Controllers']);

angular.module('RealEstate.Controllers', []);
angular.module('RealEstate.Services', []);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('home');
	$stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/views/home.html',
            controller: 'homeController'
        })
				.state('admin',{
					url: '/admin',
					controller: 'adminController',
					templateUrl: '/views/admin.html'
				})
				.state('logIn',{
					url: '/logIn',
					controller: 'logInController',
					templateUrl: '/views/logIn.html'
				});
}])
