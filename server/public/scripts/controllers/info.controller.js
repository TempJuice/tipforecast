myApp.controller('InfoController', function (UserService, TransactionService) {
  console.log('InfoController created');
  var vm = this;
  // vm.userService = UserService;
  // vm.transactionService = TransactionService;
  vm.transactionArray = TransactionService.transactionsObject;

  // vm.addTransaction = function (newTransaction) {
  //   UserService.addTransaction(newTransaction);
  //   // vm.userService.userObject = {}
  //   UserService.getTransactions();
  // }

  // vm.deleteTransaction = function (transactionId) {
  //   UserService.deleteTransaction(transactionId);
  // }

  TransactionService.getTransactions();



});
