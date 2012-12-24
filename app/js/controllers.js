'use strict'

/* Controllers Module */

function PhoneListCtrl ($scope, Phone) {
	$scope.phones = Phone.query();

	$scope.hello = "Hello World";
	$scope.orderProp = 'age';
}

//PhoneListCtrl.$inject = ['$scope', 'Phone'];

function PhoneDetailCtrl ($scope, $routeParams, Phone) {
	/*USING $http SERVICE: 
	$http.get('phones_data/' + $routeParams.phoneId + '.json').success(function(data) {
		$scope.phone = data;
		$scope.mainImageUrl = data.images[0];
	});*/

	$scope.phone = Phone.get({ phoneId: $routeParams.phoneId }, function(phone) {
		$scope.mainImageUrl = phone.images[0];
	})

	$scope.setImage = function (imageUrl) {
		$scope.mainImageUrl = imageUrl;
	}
}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', 'Phone'];