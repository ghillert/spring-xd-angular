'use strict';

var xdServices = angular.module('xdServices', [ 'ngResource' ]);

xdServices.factory('JobDefinitions', [ '$resource', function($resource) {
	return $resource('http://localhost:9393/jobs.json?deployments=true', {}, {
		query : {
			method : 'GET',
			isArray : true
		}
	});
}]);

xdServices.factory('JobExecutions', [ '$resource', function($resource) {
	return $resource('http://localhost:9393/batch/executions', {}, {
		getArray: {method: 'GET', isArray: true}
	});
}]);

