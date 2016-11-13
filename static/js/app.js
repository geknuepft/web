var app = angular.module('myApp', []);
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
