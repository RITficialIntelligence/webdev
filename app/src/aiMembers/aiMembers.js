'use strict';

angular.module('myApp.aiMembers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/aiMembers', {
    templateUrl: '/src/aiMembers/aiMembers.html',
    controller: 'AiMembersCtrl'
  });
}])

.controller('AiMembersCtrl', [function() {

}]);