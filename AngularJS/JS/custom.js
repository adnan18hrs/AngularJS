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
        {"car ": "Baleno","maker ": "Tata"},
        {"car ": "Brezza","maker ": "Maruti"},
    ];
});
//run is function called by mymodule
//$rootScope helps to print data outside the <div>
mymodule.run(function($rootScope){
    $rootScope.name="Adnan Khan";
});
