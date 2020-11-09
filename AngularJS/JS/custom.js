var mymodule=angular.module("myApp",[]);
//$scope is predefined js object>
//mymodule.controller("mycontroller",function($scope){});
mymodule.controller("mycontroller",function($scope){
    $scope.name="adnan";
    $scope.city="patna";
    //creating function named details with help of scope
    $scope.details=function(){
        return "this is my name and city: "+$scope.name+" "+$scope.city;
    };
    $scope.json=[
        {country : "India", capital : "Delhi"},
        {country : "France", capital : "Paris"},
    ];

    $scope.colors = ['red', 'pink', 'blue', 'yellow','green','black'];
});
//run is function called by mymodule
//$rootScope helps to print data outside the <div>
mymodule.run(function($rootScope){
    $rootScope.name="Adnan Khan";
});
mymodule.directive("hindiTutorials", function(){
    var tutor="this is my tutorial";

    return {template : tutor};

});
mymodule.directive("menu", function(){
    var dropdown="<select ng-model='city'>";

    dropdown += "<option>Delhi</option>";
    dropdown += "<option>Bombay</option>";
    dropdown += "<option>Hyderabad</option>";
    dropdown += "<option>Patna</option>";

    return {template : dropdown};

});