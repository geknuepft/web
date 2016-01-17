var app = angular.module('myApp', []);
app.controller('filterMain', function ($scope) {
    $scope.entries = [
        {id: 1, 'name': 'Alle Produkte'},
        {id: 2, 'name': 'Neu im Shop'},
        {id: 3, 'name': 'Armbänder'},
        {id: 4, 'name': 'Halsbänder'},
        {id: 5, 'name': 'Schlüsselanhänger'},
        {id: 6, 'name': 'Buchzeichen'},
        {id: 7, 'name': 'Kranich-Mobile'},
        {id: 8, 'name': 'Geschenkschatullen'}
    ];

});