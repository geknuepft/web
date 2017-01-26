var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider) {
    var homeState = {
        name: 'home',
        url: '/home',
        templateUrl: 'pages/home.html'
    }

    var materialState = {
        name: 'material',
        templateUrl: 'pages/material.html'
    }

    var materialDefaultState = {
        name: 'material.default',
        url: '/material',
        templateUrl: 'pages/material.default.html'
    }

    var materialGarneState = {
        name: 'material.garne',
        url: '/material/garne',
        templateUrl: 'pages/material.garne.html'
    }

    var materialPerlenState = {
        name: 'material.perlen',
        url: '/material/perlen,'
        templateUrl: 'pages/material.perlen.html'
    }

    var kontaktState = {
        name: 'kontakt',
        url: '/kontakt',
        templateUrl: 'pages/kontakt.html'
    }

    $stateProvider.state(homeState);
    $stateProvider.state(materialState);
    $stateProvider.state(materialDefaultState);
    $stateProvider.state(materialGarneState);
    $stateProvider.state(materialPerlenState);
    $stateProvider.state(kontaktState);
});


// configure our routes
/*
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
  .when('/material/garne', {
  templateUrl: 'pages/garne.html'
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
  .when('/warenkorb', {
  templateUrl: 'pages/warenkorb.html'
  })
  .when('/agb', {
  templateUrl: 'pages/agb.html'
  })
  .when('/impressum', {
  templateUrl: 'pages/impressum.html'
  })
  .otherwise({
  templateUrl: 'pages/home.html'
  });
  });
*/

app.controller('navMain', function($scope, $location) {
});

app.controller('filterMain', function($scope, $http) {
    $http.get("http://api0.geknuepft.ch/v0/filters").then(function(response) {
        $scope.filters = response.data;
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
