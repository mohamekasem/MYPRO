angular.module('myApp.iday', [])
.controller('idsCT', function ($scope, account) {
  $scope.data = {};
  account.getAll().then(function(data){
  	 $scope.data.idea= data
  })
});