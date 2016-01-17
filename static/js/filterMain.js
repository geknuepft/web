var app = angular.module('myApp', []);
app.controller('filterMain', function ($scope, $http) {
    $http.get("http://localhost:8000/static/json/filterMain.json").then(function(response) {
        $scope.entries = response.data.entries;
    });
});
