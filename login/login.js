'use strict';
angular.module('myApp.login', [])
.controller('loginCT', function($scope, account,$location) {
  $scope.data = {};
  $scope.login=function(){
	  account.login($scope.data).then(function(data){
	  
	  	if(res.data[0].userName == $scope.user.username && res.data[0].userPassword == $scope.user.password ){
	  	$location.path('/index')
	  }else{
	  	//alert('sholud signup')
	  	$location.path('/signup')
	  }
	  })
	}
});