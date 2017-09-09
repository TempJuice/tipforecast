myApp.controller('InfoController', function(UserService) {
  console.log('InfoController created');
  var vm = this;
  vm.userService = UserService;

  vm.newIncomeItem = function (newIncomeItem) {
    UserService.additem(newIncomeItem);
  }
  
  
});
