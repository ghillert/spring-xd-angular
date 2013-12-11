Spring XD Angular Prototype
===========================

In order to run:

Start `Spring XD` so that it is running at `http://localhost:9393/`. Possibly, in order to work around cross-origin issues, you may have to update `org.springframework.xd.dirt.rest.AccessControlInterceptor#ALLOWED_ORIGIN` to `"http://localhost:8080"`.

The execute:

````
$ mvn clean package tomcat7:run
````

## Notes

### Karma

For the E2E tests make sure you have:

* npm install -g karma-ng-scenario karma-junit-reporter
* npm install karma-junit-reporter --save-dev

With Spring Security configured, you may get an error like the following:

DEBUG [proxy]: proxying request - /spring-xd-angular/start.html to localhost:8080
Chrome 31.0.1650 (Mac OS X 10.9.0) ERROR
	Uncaught SecurityError: Blocked a frame with origin "http://localhost:9876" from accessing a cross-origin frame.
	at /Users/hillert/dev/git/spring-xd-angular/node_modules/karma-ng-scenario/lib/adapter.js:43
Chrome 31.0.1650 (Mac OS X 10.9.0) ERROR
	Uncaught SecurityError: Blocked a frame with origin "http://localhost:9876" from accessing a cross-origin frame.
	at /Users/hillert/dev/git/spring-xd-angular/node_modules/karma-ng-scenario/lib/adapter.js:43
Chrome 31.0.1650 (Mac OS X 10.9.0): Executed 0 of 1 ERROR (1.221 secs / 0 secs)
Chrome 31.0.1650 (Mac OS X 10.9.0): Executed 0 of 1 ERROR (0.511 secs / 0 secs)

