var app = angular.module('myApp', ['ngRoute']);


// configure our routes
app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'pages/home.html'
        })
        .when('/artikel', {
            templateUrl: 'pages/artikel.html'
        })
        .when('/herstellung', {
            templateUrl: 'pages/herstellung.html'
        })
        .when('/material', {
            templateUrl: 'pages/material.html'
        })
        .when('/markt', {
            templateUrl: 'pages/markt.html'
        })
        .when('/kontakt', {
            templateUrl: 'pages/kontakt.html'
        })
        .otherwise({
            templateUrl: 'pages/home.html'
        });
});

app.controller('navMain', function($scope, $location) {
    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
});

app.controller('filterMain', function($scope, $http) {
    $http.get("http://localhost:8000/static/json/filterMain.json").then(function(response) {
        $scope.entries = response.data.entries;
    });
});

app.controller('gallery', function($scope, $http) {
    $http.get("http://api0.geknuepft.ch/v0/articles").then(function(response) {
        $scope.articles = response.data;

        $scope.articles.map(
            function(v, i) {
                if (typeof v.pictures != 'undefined') {
                    if ('cma0' in v.pictures) {
                        v.picture = v.pictures['cma0'];
                    } else if ('rma0' in v.pictures) {
                        v.picture = v.pictures['rma0'];
                    }
                }
                return v;
            }
        )
    });
});
