/**
 * @ngdoc overview
 * @name mothusiApp.account
 * @description
 * The `mothusiApp.account` module
 *
 * @requires ui.router
 */

(function () {
	'use strict';

	// register the route config on the application
	angular
		.module('mothusiApp.account', ['ui.router'])
		.config(configAccountRoute);

	// inject configAccountRoute dependencies
	configAccountRoute.$inject = ['$stateProvider'];

	// route config function configuring the passed $stateProvider
	function configAccountRoute($stateProvider) {
		var loginState = {
			name: 'login',
			url: '/login',
			templateUrl: 'app/account/login/login.html',
			controller: 'LoginController',
			controllerAs: 'login'
		};

		$stateProvider.state(loginState);
	}

})();