angular.module('couponApp.controllers',[]).controller('CouponListController',['$scope','Coupon',function($scope,Coupon){

    Coupon.getAll().success(function(data){
        var coupons=data.results;
        var custom = [];
        var common = [];
        for (i = 0; i < coupons.length; i++)
        {
            if (coupons[i].custom)
                custom.push(coupons[i]);
            else
                common.push(coupons[i]);
        }
        
        $scope.items = common;
        $scope.custom = custom;
    });

}]).controller('DetailController',['$scope','Coupon','$state','$stateParams',function($scope,Coupon,$state,$stateParams){

    $scope.coupon={id:$stateParams.id,title:$stateParams.title,content:$stateParams.content};


}]);;