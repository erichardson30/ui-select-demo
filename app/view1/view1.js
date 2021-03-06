'use strict';

angular.module('myApp.view1', ['ngRoute','myApp.testDirective', 'ngSanitize', 'ui.select'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
    controllerAs: 'vm'
  });
}])

.controller('View1Ctrl', [function() {
    var vm = this;
    vm.people = [
   { name: 'Adam',      email: 'adam@email.com',      age: 10 },
   { name: 'Amalie',    email: 'amalie@email.com',    age: 12 },
   { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30 },
   { name: 'Samantha',  email: 'samantha@email.com',  age: 31 },
   { name: 'Estefanía', email: 'estefanía@email.com', age: 16 },
   { name: 'Natasha',   email: 'natasha@email.com',   age: 54 },
   { name: 'Nicole',    email: 'nicole@email.com',    age: 43 },
   { name: 'Adrian',    email: 'adrian@email.com',    age: 21 }
 ];
}]);
