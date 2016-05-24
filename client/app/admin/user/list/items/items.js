	/**
	 * @ngdoc overview
	 * @name mothusiApp.admin.user.list.items
	 * @requires ui.router
	 * @requires components/listImage
	 *
	 * @description
	 * The `mothusiApp.admin.user.list.items` module which provides:
	 *
	 * - {@link mothusiApp.admin.user.list.items.controller:UserItemsController UserItemsController}
	 */

(function () {
	'use strict';

	angular
		.module('mothusiApp.admin.user.list.items', [
			'ui.router',
			'mothusiApp.listImage'
		]);

})();
