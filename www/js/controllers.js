angular.module('couponApp.controllers',[]).controller('CouponListController',['$scope','Coupon',function($scope,Coupon){

    Coupon.getAll().success(function(data){
        $scope.items=data.results;
    });

}]);