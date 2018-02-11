var myApp = angular.module('myApp');

myApp.controller("ContactController", ["$scope", "$http", "$location", "$routeParams", function($scope, $http, $location, $routeParams){
	

	// Getting All Contacts
	$scope.getContacts = function(){
		console.log('Ni sulod ko! //getContacts');
		$http.get("/contacts/list").then(function(response){
			$scope.contacts = response.data;
		});
	}

	// Getting One Contact
	$scope.getContact = function(){
		console.log('Ni sulod ko! //getContact');
		var id = $routeParams.id;
		$http.get("/contacts/list/"+id).then(function(response){
			$scope.contact = response.data;
			console.log($scope.contact);
			console.log(id);
		});
	}

	// Add Contact
	$scope.addContact = function(){
		console.log('Ni sulod ko! //addContact');
		console.log($scope.contact);
		$http.post("/contacts/list", $scope.contact).then(function(response){
			window.location.href="#!/contacts";
		});
	}

	// Update Contact
	$scope.updateContact = function(){
		console.log('Ni sulod ko! //addContact');
		var id = $routeParams.id;
		$http.put("/contacts/list/"+id, $scope.contact).then(function(response){
			window.location.href="#!/contacts";
		});
	}

	// Delete Contact
	$scope.removeContact = function(id ){
		console.log('Ni sulod ko! //removeContact');
		$http.delete("/contacts/list/"+id).then(function(response){
			window.location.href="#!/contacts";
		});
	}
}]);