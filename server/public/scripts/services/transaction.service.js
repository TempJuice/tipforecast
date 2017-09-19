myApp.service('TransactionService', function ($http, $location) {
    var self = this;

    self.transactionsObject = { list: [] };

// self.top = moment().format('dddd');
// self.tom = moment().format('MM/DD/YYYY');
// console.log( self.tom);

    self.getTransactions = function () {
        // console.log('Get Transactions function was triggered');
        $http.get('/info').then(function (response) {
            console.log('Transactions get route brought back: ', response.data);
            // console.log('date format is: ', response.data.date);
            
            self.transactionsObject.list = response.data;
            // console.log('Transactions Object: ', self.transactionsObject.list);
        })//end of get success function
    }//end of getTransactions function

    self.addTransaction = function (newTransaction) {
        console.log('add item function was initiated');
        $http.post('/info', newTransaction).then(function (response) {
            // console.log('Transaction post route brought back: ', response);
            self.getTransactions();
        })//end of post success function      
    }//end of additem function

    self.updateTransaction = function (updatedTransaction) {
        console.log('Update Transactions function was triggered');
        console.log('updatedTransaction is: ', updatedTransaction);
        $http.put('/info', updatedTransaction).then(function (response) {
            console.log('Transactions put route brought back: ', response);
            self.getTransactions();
        })//end of update success function
    }//end of updateTransaction function

    self.deleteTransaction = function (transactionId) {
        // console.log('Delete Transactions function was triggered');
        // console.log('transactionId is: ', transactionId);
        $http.delete('/info/' + transactionId).then(function (response) {
            // console.log('Transactions get route brought back: ', response);
            self.getTransactions();
        })//end of delete success function
    }//end of deleteTransaction function

});//end of transaction service