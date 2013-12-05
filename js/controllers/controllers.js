var productApp = angular.module('prodApp', ['ngRoute']);

productApp.config(function($routeProvider) {
	$routeProvider
		.when('/prods', {
			controller: 'productController',
			templateUrl: 'partials/product.htm'
		})
		.otherwise({redirectTo: '/prods'})
});

productApp.controller('productController', function($scope, $http) {
	$http.get('php/connect2.php').
	success(function(data, status) {
		$scope.products = data;
		console.log($scope.products + ' with status ' + status);
	}).
	error(function(data, status, headers, config) {		
		$scope.error = true;
		$scope.msg = 'Failed to retrieve data from the database. Reason: ' + status;
	});
})

