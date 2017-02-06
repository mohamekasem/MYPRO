 angular.module('myApp.serv', [])
.factory('account', function ($http) {
  return {
    login: function(user){
      return $http({
        method: 'POST',
        url: 'api/login',
        data: user 
      })
      .then(function(resp){
        return resp.data;
      })
    },
    signup:function(user){
      return $http({
        method:'POST',
        url:'api/signup',
        data:user
      }).then(function(resp){
        return resp.data;
      })
    },
       addtext: function(utr){
     return $http({
      method: 'POST',
      url: '/api/id',
      data: utr
    })
     .then(function (resp) {
      return resp
    });
   }
  }
})
