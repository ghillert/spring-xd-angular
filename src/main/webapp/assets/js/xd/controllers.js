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

	xdControllers.controller('LaunchJobController', [ '$scope', '$http', '$log',
		function($scope, $http, $log) {

			var jobLaunchRequest = $scope.jobLaunchRequest = {
				jobName: 'AAA',
				jobParameters:[{key:'phone', value:'vallll', type: 'long', isIdentifying: true}]
			};

			$scope.addParameter = function() {
				jobLaunchRequest.jobParameters.push({key:'new', value:'nn'});
			  };

			  $scope.removeParameter = function(jobParameter) {
				    for (var i = 0, ii = jobLaunchRequest.jobParameters.length; i < ii; i++) {
				      if (jobParameter === jobLaunchRequest.jobParameters[i]) {
				        $scope.jobLaunchRequest.jobParameters.splice(i, 1);
				      }
				    }
				  };

			$scope.dataTypes = [
				{id:1, key:'string', name: 'String', selected: true},
				{id:2, key:'date',   name: 'Date'},
				{id:3, key:'long',   name: 'Long'},
				{id:4, key:'double', name: 'Double'}
			];

		}]);

xdControllers.controller('ListJobExecutionsController', [ '$scope', '$http',
		'JobExecutions', '$log', function($scope, $http, JobExecutions, $log) {
			JobExecutions.getArray(function(data) {
				$log.info(data);
				$scope.jobExecutions = data;
			});
		} ]);
