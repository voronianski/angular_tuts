'use strict'

/* Controllers Module */

function PhoneListCtrl ($scope, $http) {
	$http.get('phones_data/phones.json').success(function(data) {
		$scope.phones = data;
	});

	$scope.hello = "Hello World";
	$scope.orderProp = 'age';
}

//PhoneListCtrl.$inject = ['$scope', '$http'];

function PhoneDetailCtrl ($scope, $routeParams, $http) {
	$http.get('phones_data/' + $routeParams.phoneId + '.json').success(function(data) {
		$scope.phone = data;
	});
}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', $http];