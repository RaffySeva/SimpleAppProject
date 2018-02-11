var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller : 'ContactController',
		templateUrl : 'views/contactList.html'
	})
	.when('/contacts', {
		controller : 'ContactController',
		templateUrl : 'views/contactList.html'
	})
	.when('/contacts/details/:id', {
		controller : 'ContactController',
		templateUrl : 'views/contactDetails.html'
	})
	.when('/contacts/add', {
		controller : 'ContactController',
		templateUrl : 'views/addContact.html'
	})
	.when('/contacts/edit/:id', {
		controller : 'ContactController',
		templateUrl : 'views/editContact.html'
	})
	.otherwise({
		redirectTo : '/'
	});
});