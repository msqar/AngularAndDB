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
	$http.get('php/connect.php').success(function(data) {
		$scope.products = data;
		console.log($scope.products);
	});
})

