(function () {
	'use strict';

	// register the controller as UserController
	angular
		.module('mothusiApp.admin.user')
		.controller('UserController', UserController);

	// add UserController dependencies to inject
	// UserController.$inject = [''];

	/**
	 * UserController constructor. Main controller for the mothusiApp.admin.user
	 * module.
	 *
	 */
	function UserController() {
		// var vm = this;
	}

})();
