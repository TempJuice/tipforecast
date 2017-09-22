myApp.service('TransactionService', function ($http) {
    var self = this;

    self.transactionsObject = { list: [] };
    // self.calendarObjects = {};
    self.domCalendarObject = { list: [] }



    // self.top = moment().format('dddd');
    // self.tom = moment().format('MM/DD/YYYY');
    // console.log( self.tom);

    self.getTransactions = function () {
        // console.log('Get Transactions function was triggered');
        $http.get('/info').then(function (response) {
            // console.log('Transactions get route brought back: ', response.data);
            console.log('date format is: ', response.data);
            self.transactionsObject.list = response.data;
            // self.calendarObjects = response.data;
            // for (var i = 0; i < response.data.length; i++) {
            //     var event = response.data[i];
            //     // console.log('this is the event', event);
            //     dateObject = {};
            //     dateObject.id = event.id;
            //     dateObject.username = event.username;
            //     dateObject.type = event.type;
            //     dateObject.date = new Date(event.date);
            //     dateObject.description = event.description;
            //     self.transactionsObject.list.push(dateObject);
            // //     // dateObject.title = event.description;
            // //     // dateObject.start = dateObject.date;
            // //     // self.domCalendarObject.list.push(dateObject);
            // }
            // console.log('Transactions Object: ', self.transactionsObject.list);
        })//end of get success function
    }//end of getTransactions function

    // self.getTransactions();

    // // self.changeObjectsForCalendar = function () {
    // //     // console.log('calendar objects are: ', self.calendarObjects);
    // //     for (var i = 0; i < self.calendarObjects.length; i++) {
    // //         var event = self.calendarObjects[i];
    // //         // console.log('this is the event', event);
    // //         dateObject = {};
    // //         // dateObject.type = event.type;

    // //         dateObject.title = event.description;
    // //         dateObject.start = event.date;
    // //         // console.log('dateObject is: ',dateObject );

    // //         self.domCalendarObject.list.push(dateObject);
    // //         // console.log('my array is now: ', self.domCalendarObject.list);

    // //     }

    // }


    self.addTransaction = function (newTransaction) {
        console.log('add item function was initiated');
        $http.post('/info', newTransaction).then(function (response) {
            self.getTransactions();
        })//end of post success function      
    }//end of additem function

    self.updateTransaction = function (updatedTransaction) {
        console.log('Update Transactions function was triggered');
        console.log('updatedTransaction is: ', updatedTransaction);
        $http.put('/info', updatedTransaction).then(function (response) {
            // console.log('Transactions put route brought back: ', response);
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