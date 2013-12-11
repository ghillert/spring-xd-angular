'use strict';

var xdControllers = angular.module('phonecatControllers', []);

xdControllers.controller('TabController', [ '$scope', '$http',
	function($scope, $http) {
		$scope.tabs = [ {
			title : "Dynamic Title 1",
			content : "Dynamic content 1"
		}, {
			title : "Dynamic Title 2",
			content : "Dynamic content 2",
			disabled : true
		} ];

		$scope.alertMe = function() {
			setTimeout(function() {
				alert("You've selected the alert tab!");
			});
		};

		$scope.navType = 'pills';
	} ]);

xdControllers.controller('ListDefinitionsController', [ '$scope', '$http',
		'JobDefinitions', '$log',
	function($scope, $http, JobDefinitions, $log) {
		JobDefinitions.get(function(data) {
			$log.info(data);
			$scope.jobDefinitions = data.content;
		});
	} ]);

xdControllers.controller('DeploymentsCtrl', [ '$scope', '$http', '$log',
	function($scope, $http, $log) {

	} ]);

xdControllers.controller('ListJobExecutionsController', [ '$scope', '$http',
	'JobExecutions', '$log', function($scope, $http, JobExecutions, $log) {
		JobExecutions.getArray(function(data) {
			$log.info(data);
			$scope.jobExecutions = data;
		});
	} ]);

