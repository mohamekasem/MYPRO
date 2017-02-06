//app.js
var myApp = angular.module('myApp',[
		'myApp.signup',
		'myApp.serv',
    'myApp.login',
		'ngRoute'
	])
.config(function ($routeProvider, $httpProvider) {
  //x$locationProvider.hashPrefix('')
  $routeProvider
    .when('/signup', {
      templateUrl: 'signup/signup.html',
      controller: 'signupCT'
    })
    .when('/login', {
      templateUrl:'login/login.html',
      controller:'loginCT'
    })
     .when('/idyas', {
      templateUrl:'idyas/ideyas.html',
      controller:'idsCT'
    })
     .when('/ida',{
      templateUrl:'ida/id.html'
     })
    })
   

// .factory('Auth', function ($http) {
// 	var login = function (user) {
// 		return $http({
// 			method: 'POST',
// 			url: 'login/login',
// 			data: user
// 		})
// 		.then(function (resp) {
// 			return resp.data;
// 		});
// 	};

// 	var signup = function (user) {
// 		return $http({
// 			method: 'POST',
// 			url: 'signup/signup',
// 			data: user
// 		})
// 		.then(function (resp) {
// 			return resp.data;
// 		});
// 	};
//angular.module('shortly.services', [])
// .controller('todoController', function($scope){
// 	$scope.todos = [];

//     $scope.addTodo = function(str){
//     	$scope.newTodo = "";
//     	$scope.todos.push($scope.newTodo)
//     }

//     $scope.removeTodo = function(){
//     	$scope.todos.splice(index, 1)
//     }
// });