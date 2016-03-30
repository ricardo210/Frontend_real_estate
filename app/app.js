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
	})
	.state('employee',{
		url: '/employee',
		controller: 'employeeController',
		templateUrl: '/views/employee.html'
	})
	.state('advertiser',{
		url: '/advertiser',
		controller: 'advertiserController',
		templateUrl: '/views/advertiser.html'
	});
}])


app.filter('filterWithOr', function ($filter) {
      var comparator = function (actual, expected) {
        if (angular.isUndefined(actual)) {
          // No substring matching against `undefined`
          return false;
        }
        if ((actual === null) || (expected === null)) {
          // No substring matching against `null`; only match against `null`
          return actual === expected;
        }
        if ((angular.isObject(expected) && !angular.isArray(expected)) || (angular.isObject(actual) && !hasCustomToString(actual))) {
          // Should not compare primitives against objects, unless they have custom `toString` method
          return false;
        }

        actual = angular.lowercase('' + actual);
        if (angular.isArray(expected)) {
          var match = false;
          expected.forEach(function (e) {
            e = angular.lowercase('' + e);
            if (actual.indexOf(e) !== -1) {
              match = true;
            }
          });
          return match;
        } else {
          expected = angular.lowercase('' + expected);
          return actual.indexOf(expected) !== -1;
        }
      };
      return function (campaigns, filters) {
        return $filter('filter')(campaigns, filters, comparator);
      };
    });
