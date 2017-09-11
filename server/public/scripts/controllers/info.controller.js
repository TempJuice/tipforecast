myApp.controller('InfoController', function (UserService) {
  console.log('InfoController created');
  var vm = this;
  vm.userService = UserService;
  vm.transactionArray = UserService.transactionArray;

  vm.newTransaction = function (newTransaction) {
    UserService.addTransaction(newTransaction);
    UserService.getTransactions();
  }

  vm.deleteTransaction = function () {
    UserService.deleteTransaction();
  }

  UserService.getTransactions();


});
