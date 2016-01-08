/* global angular*/

    var angular = require('angular');
    //var route = require('angular-route');

    var app = angular.module('ecomcApp', ['ngRoute']);

    app.controller('ecomcController', function ($scope, $http) {
        var self = this;
        
        console.log("Using ecomcController");
        $scope.show = false;
        
        $scope.parentScope = {};
        $scope.defaultTemplate = "src/views/home.html"
        $scope.parentScope.categoriesList = ["Category 1", "Category 2", "Category 3"];
        $scope.parentScope.DUPLICATEPARENT = false;

        $http.get("src/js/products.json").success(function (response) {
            // Populate names
            console.log("Products are::", response.productList);
            $scope.parentScope.productList = response ? response.productList : [];
            if ($scope.parentScope.productList.length > 0) {
                $scope.productCount = $scope.parentScope.productList.length;
                console.log("No of products:: ", $scope.productCount);
            }
        }).error(function(Error){
            console.log("Error reading file ::", Error);
        });

        
         // configure our routes
        ecomcApp.config(function($routeProvider) {
        $routeProvider
                .when('/', {
                templateUrl : '/index.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
    });
        
        ecomcApp.loadTemplate = function(){
            console.log("Current URL ", location.href)
            return 
        }
        

    });
