var app = angular.module('myApp', ['ui.router', 'rzModule']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state({
        name: 'home',
        url: '/',
        templateUrl: 'pages/home.html'
    });

    $stateProvider.state({
        name: 'artikel',
        abstract: true,
        templateUrl: 'pages/artikel.html'
    });

    $stateProvider.state({
        name: 'artikel.default',
        url: '/artikel',
        templateUrl: 'pages/artikel.default.html'
    });

    $stateProvider.state({
        name: 'artikel.armbaender',
        url: '/artikel/armbänder',
        templateUrl: 'pages/artikel.armbaender.html'
    });

    $stateProvider.state({
        name: 'artikel.schluessel',
        url: '/artikel/schlüsselanhänger',
        templateUrl: 'pages/artikel.schluessel.html'
    });

    $stateProvider.state({
        name: 'artikel.buchzeichen',
        url: '/artikel/buchzeichen',
        templateUrl: 'pages/artikel.buchzeichen.html'
    });

    $stateProvider.state({
        name: 'artikel.marktplatz',
        url: '/artikel/marktplatz',
        templateUrl: 'pages/artikel.marktplatz.html'
    });

    $stateProvider.state({
        name: 'herstellung',
        url: '/herstellung',
        templateUrl: 'pages/herstellung.html'
    });

    $stateProvider.state({
        abstract: true,
        name: 'material',
        templateUrl: 'pages/material.html'
    });

    $stateProvider.state({
        name: 'material.default',
        url: '/material',
        templateUrl: 'pages/material.default.html'
    });

    $stateProvider.state({
        name: 'material.garne',
        url: '/material/garne',
        templateUrl: 'pages/material.garne.html'
    });

    $stateProvider.state({
        name: 'material.perlen',
        url: '/material/perlen',
        templateUrl: 'pages/material.perlen.html'
    });

    $stateProvider.state({
        name: 'markttage',
        url: '/markttage',
        templateUrl: 'pages/markttage.html'
    });

    $stateProvider.state({
        name: 'kontakt',
        url: '/kontakt',
        templateUrl: 'pages/kontakt.html'
    });

    $stateProvider.state({
        name: 'warenkorb',
        url: '/warenkorb',
        templateUrl: 'pages/warenkorb.html'
    });

    $stateProvider.state({
        name: 'agb',
        url: '/agb',
        templateUrl: 'pages/agb.html'
    });

    $stateProvider.state({
        name: 'impressum',
        url: '/impressum',
        templateUrl: 'pages/impressum.html'
    });

});

app.controller('navMain', function($scope, $location) {
});

app.controller('filterMain', function($scope, $http) {
    $http.get("http://api0.geknuepft.ch/v0/filters").then(function(response) {
        $scope.filters = response.data;
    });
});

app.controller('propertiesMain', function($scope) {
    $scope.lengthSlider = {
        value: 14,
        options: {
            floor: 9,
            ceil: 20,
            step: 0.5,
            precision: 1,
            showTicks: 1,
            translate: function(value) {
                return value + ' cm';
            },
        }
    };
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
