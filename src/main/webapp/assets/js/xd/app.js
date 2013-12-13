'use strict';

var xdApp = angular.module('xdApp', [ 'ui.router', 'phonecatControllers',
	'phonecatFilters', 'xdServices' ]);

xdApp.run(function ($rootScope, $state, $stateParams) {
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
});

xdApp.config([ '$stateProvider', '$urlRouterProvider', '$locationProvider',
	function($stateProvider, $urlRouterProvider, $locationProvider) {

		$urlRouterProvider.otherwise("/jobs/definitions");

		$stateProvider.state('home', {
			url : '/',
			abstract:true,
			templateUrl : 'assets/partials/home.html',
		}).state('home.jobs', {
			url : 'jobs',
			abstract:true,
			templateUrl : 'assets/partials/jobs/jobs.html',
		}).state('home.about', {
			url : 'about',
			templateUrl : 'assets/partials/about.html'
		}).state('home.jobs.definitions', {
			url : '/definitions',
			templateUrl : 'assets/partials/jobs/definitions.html',
			controller: 'ListDefinitionsController'
		}).state('home.jobs.deployments', {
			url : '/deployments',
			templateUrl : 'assets/partials/jobs/deployments.html'
		}).state('home.launch', {
			url : 'launch',
			templateUrl : 'assets/partials/launch.html',
			controller: 'LaunchJobController'
		}).state('home.jobs.executions', {
			url : '/executions',
			templateUrl : 'assets/partials/jobs/executions.html',
			controller: 'ListJobExecutionsController'
		});
	} ]);
