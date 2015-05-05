// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('couponApp', ['ionic', 'couponApp.controllers', 'couponApp.services'])

.run(function ($ionicPlatform, $state) {
    localStorage.setItem("custom","0");
    localStorage.setItem("common","0");
    
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        //    if(window.cordova && window.cordova.plugins.Keyboard) {
        //      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        //    }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
        $state.go('coupons');
    });
}).config(function ($stateProvider) {
    $stateProvider.state('coupons', {
        url: '/coupons',
        controller: 'CouponListController',
        templateUrl: 'views/coupons.html'
    }).state('detail', {
        url: '/coupons/detail/:id/:title/:content/:expdate/:num/:custom',
        controller: 'DetailController',
        templateUrl: 'views/detail.html'
    }).state('about', {
        url: '/about',
        controller: 'AboutController',
        templateUrl: 'views/about.html'
    });
});