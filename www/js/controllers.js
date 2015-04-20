angular.module('couponApp.controllers',[]).controller('CouponListController',['$scope','Coupon',function($scope,Coupon){

    Coupon.getAll().success(function(data){
        $scope.items=data.results;
    });

}]).controller('DetailController',['$scope','Coupon','$state','$stateParams',function($scope,Coupon,$state,$stateParams){

    $scope.coupon={id:$stateParams.id,title:$stateParams.title,content:$stateParams.content};


}]);;