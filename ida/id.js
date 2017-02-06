angular.module('myApp.ida', [])

.controller('idCT', function ($scope, $location, account) {
  $scope.data = {};
  $scope.addtext= function(){
   Links.addOne($scope.data)
   .then(function(resp){
   $location.path('/ideyas')	
   	
   })
  }

  
});
