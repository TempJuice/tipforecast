var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ui.calendar']);

/// Routes ///
myApp.config(function($routeProvider, $locationProvider, $mdThemingProvider) {
  $locationProvider.hashPrefix('');
  // console.log('myApp -- config');
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'LoginController as lc',
    })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController as lc'
    })
    .when('/user', {
      templateUrl: '/views/templates/user.html',
      controller: 'UserController as uc',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/info', {
      templateUrl: '/views/templates/info.html',
      controller: 'InfoController as ic',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    }).when('/logout', {
      resolve: {
        logout: function (UserService) {
          return UserService.logout();
        }
    }
  })
    .otherwise({
      redirectTo: 'home'
    });

    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('red');

});
