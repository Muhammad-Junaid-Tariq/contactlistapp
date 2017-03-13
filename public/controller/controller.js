/**
 * Created by Muhammad Junaid on 1/23/2017.
 */
var app = angular.module("appmodule",[]);
app.controller("appctrl",function($scope,$http){
   $scope.results = [];
    var refresh = function()
    {
        $http.get("/contactlist").success(function(response){
            $scope.results = response;
        });
    }
    refresh();
    $scope.addContact = function()
    {
        console.log("adding");
        $http.post("/contactlist",$scope.contact);
        refresh();
        $scope.contact = "";
    }
    $scope.update = function()
    {
        $http.put("/contactlist/"+$scope.contact._id,$scope.contact).success(function(response){
            refresh();
            $scope.contact = "";
        });
    }
    $scope.delete = function(id)
    {
        console.log("request delete");
        $http.delete("/contactlist/"+id).success(function (response) {
            refresh();
        });
    }
    $scope.edit = function(id)
    {
        $http.get("/contactlist/"+id).success(function(response){
           $scope.contact = response;
        });
    }
});