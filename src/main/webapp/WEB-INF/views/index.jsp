<!DOCTYPE html>
<html lang="en" ng-app="xdApp">
	<head>
		<meta charset="utf-8">
		<title>Spring&nbsp;XD</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<link href="assets/css/bootstrap/bootstrap.css" rel="stylesheet">
		<link href="assets/css/xd/xd.css" rel="stylesheet">

		<script src="assets/js/angular/angular.js"></script>
		<script src="assets/js/angular/angular-ui-router.js"></script>
		<script src="assets/js/angular/angular-resource.js"></script>
		<script src="assets/js/xd/app.js"></script>
		<script src="assets/js/xd/controllers.js"></script>
		<script src="assets/js/xd/services.js"></script>
		<script src="assets/js/xd/filters.js"></script>

	</head>
	<body>
		<div id="xd-navbar">
			<nav class="navbar navbar-inverse navbar-static-top" role="navigation">
				<div class="navbar-header">
					<button class="navbar-toggle" data-toggle="collapse" type="button" data-target=".navbar-ex1-collapse">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand"><strong>Spring&nbsp;XD</strong></a>
				</div>
				<div class="collapse navbar-collapse navbar-ex1-collapse">
					<ul class="nav navbar-nav">
						<li ng-class="{ active: $state.includes('home.jobs') }"><a ui-sref="home.jobs.definitions">Jobs</a></li>
						<li ng-class="{ active: $state.includes('home.about') }"><a ui-sref="home.about">About</a></li>
					</ul>
				</div>
			</nav>
		</div>

		<div id="xd-container" class="container">
			<div id="xd-loading" class="xd-loading"></div>
			<div id="xd-status-msg"></div>
			<div ui-view>dd</div>
		</div>

	</body>
</html>
