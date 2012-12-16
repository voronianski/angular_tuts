'use strict'

/* Controllers Module */

function PhoneListCtrl ($scope, $http) {
	$http.get('phones_data/phones.json').success(function(data) {
		$scope.phones = data.splice(0, 5);
	});

	$scope.hello = "Hello World";
	$scope.orderProp = 'age';
}

//PhoneListCtrl.$inject = ['$scope', '$http']; 