myApp.controller('InfoController', function (UserService) {
  console.log('InfoController created');
  var vm = this;
  vm.userService = UserService;
  vm.transactionArray = UserService.transactionArray;

  vm.newIncomeItem = function (newIncomeItem) {
    UserService.addItem(newIncomeItem);
    UserService.getTransactions();
  }

  UserService.getTransactions();


});
