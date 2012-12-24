'use strict'

/* 'Phonecat' App Module */

angular.module('phonecat', ['phonecatFilters'])
	.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', { templateUrl: 'partials/phone-list.html', controller: PhoneListCtrl })
		.when('/phones/:phoneId', { templateUrl: 'partials/phone-detail.html', controller: PhoneDetailCtrl })
		.otherwise({ redirectTo: '/' });

	$locationProvider.hashPrefix('!');
	//$locationProvider.html5Mode(true);
	}
]);