'use strict'

angular.module('myApp.signup', ['ngRoute'])

.controller('signupCT', function($scope, account, $location) {
  $scope.data = {};
  $scope.signup = function(){
  account.signup($scope.data).then(function(data){
  	console.log(data)
  	if(typeof data === "string"){
  	$location.path('/login')
  	}else{
  		$location.path('/index')
  }
  })
  	
  }
});
