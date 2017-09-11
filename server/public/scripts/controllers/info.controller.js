myApp.controller('InfoController', function (UserService) {
  console.log('InfoController created');
  var vm = this;
  vm.userService = UserService;
  vm.transactionArray = UserService.transactionArray;

  vm.addTransaction = function (newTransaction) {
    UserService.addTransaction(newTransaction);
    UserService.getTransactions();
  }

  vm.deleteTransaction = function (transactionId) {
    UserService.deleteTransaction(transactionId);
  }

  UserService.getTransactions();



});
