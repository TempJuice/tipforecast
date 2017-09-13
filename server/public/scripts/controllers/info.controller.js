myApp.controller('InfoController', function (UserService, TransactionService) {
  console.log('InfoController created');
  var vm = this;

  
  vm.userObject = UserService.userObject
  // console.log('Controller userObject: ', vm.userObject);
  
  vm.transactionArray = TransactionService.transactionsObject;

  vm.addTransaction = function (newTransaction) {
    TransactionService.addTransaction(newTransaction);
    // console.log('controller add function hit');   
  }

  vm.updateTransaction = function (updatedTransaction) {
    // console.log('controller update function hit');
    // console.log('updatedTransaction is: ', updatedTransaction);
    
    TransactionService.updateTransaction(updatedTransaction);
  }

  vm.deleteTransaction = function (transactionId) {
    TransactionService.deleteTransaction(transactionId);
  }

  TransactionService.getTransactions();



});
