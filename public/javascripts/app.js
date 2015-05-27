angular.module('myApp',[])
.controller('myCtrl',function($scope,$http){
    $scope.makeRequest=function(){
        $http.post('/hello',{name:'Farrukh',roll:605})
            .success(function(data){
             $scope.data=data;
        })
        .error(function(err){
            console.log(err);
        })
    }






});

