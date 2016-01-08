'use strict';

angular.module("myApp.testDirective", [])
.directive("testDirective",
        function() {
            return {
                template : "<h1>Made by a directive!</h1>"
            };
        });
