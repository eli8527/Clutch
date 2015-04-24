angular.module('couponApp.controllers', []).controller('CouponListController', ['$scope', 'Coupon', '$state', '$ionicPopup', function ($scope, Coupon, $state, $ionicPopup) {
    var custom = localStorage.getItem("custom");
    var common = localStorage.getItem("common");

    if (custom == "0" && common == "0") {
        Coupon.getAll().success(function (data) {
            var coupons = data.results;
            var cust = [];
            var com = [];


            // builds coupon lists
            for (i = 0; i < coupons.length; i++) {
                var coupon = coupons[i];

                // checks if expired
                if (Date.parse(coupon.expdate.iso) < new Date().getTime())
                    continue;

                if (coupon.custom) {
                    setTimeout(addLater, coupon.tta, coupon);
                } else
                    com.push(coupon);
            }

            localStorage.setItem("custom", JSON.stringify(cust));
            localStorage.setItem("common", JSON.stringify(com));
            $state.go($state.current, {}, {
                reload: true
            });
        });
    }
    $scope.items = JSON.parse(localStorage.getItem("common"));
    $scope.custom = JSON.parse(localStorage.getItem("custom"));

    // adds to custom coupon list
    function addLater(coup) {
        var custom = JSON.parse(localStorage.getItem("custom"));
        custom.push(coup);
        localStorage.setItem("custom", JSON.stringify(custom));
        $state.go($state.current, {}, {
            reload: true
        });

    }


    $scope.showInfo = function () {
        var alertPopup = $ionicPopup.alert({
            title: 'Clutch',
            template: 'Welcome to Clutch, a COS448 Project developed by Cissy Chen, Eric Li, Aditya Trivedi, and Julia Wang.'
        });
        alertPopup.then(function (res) {

        });
    };

}]).controller('DetailController', ['$scope', 'Coupon', '$state', '$stateParams', function ($scope, Coupon, $state, $stateParams) {

    // the coupon object
    $scope.coupon = {
        id: $stateParams.id,
        title: $stateParams.title,
        content: $stateParams.content,
        expdate: $stateParams.expdate,
        num: $stateParams.num
    };

    // qr code
    //    new QRCode(document.getElementById("qrcode"), $scope.coupon.num);
    var qrcode = new QRCode("qrcode", {
        text: $scope.coupon.num,
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
    
    var expiration = new Date(Date.parse($stateParams.expdate));
    document.getElementById("expiration").innerText = "Expires on " + expiration.toDateString() + ".";
    
}]);