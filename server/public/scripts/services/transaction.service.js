myApp.service('TransactionService', function ($http) {
    var self = this;

    self.transactionsObject = { list: [] };
    self.calendarObjects = {};
    self.domCalendarObject = { list: [] }
    self.mathObject = {
        incomeTotal: 0,
        expTotal: 0,
        total: 0
    };



    // self.top = moment().format('dddd');
    // self.tom = moment().format('MM/DD/YYYY');
    // console.log( self.tom);

    self.getTransactions = function () {
        // console.log('Get Transactions function was triggered');
        $http.get('/info').then(function (response) {
            console.log('Transactions get route brought back: ', response.data);
            // console.log('date format is: ', response.data);
            // self.calendarObjects = response.data;
            self.transactionsObject.list = response.data;
            // self.changeObjectsForCalendar();
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
            // self.changeObjectsForCalendar();
        })
    };//end of getTransactions function


    // self.changeObjectsForCalendar = function () {
    //     // console.log('calendar objects are: ', self.calendarObjects);
    //     for (var i = 0; i < self.calendarObjects.length; i++) {
    //         var event = self.calendarObjects[i];
    //         dateObject = {};
    //         dateObject.title = event.description;
    //         dateObject.start = event.date;
    //         self.domCalendarObject.list.push(dateObject);
    //     }
    // }


    self.getMath = function () {
        // console.log('Get math function was triggered');
        $http.get('/info/math').then(function (response) {
            // console.log('Math get route brought back: ', response.data);
            for (var i = 0; i < response.data.length; i++) {
                var math = response.data[i];
                if (math.type === 'income') {
                    self.mathObject.incomeTotal += math.amount
                } else {
                    self.mathObject.expTotal -= math.amount
                } 
                // console.log('mathObject is now: ', self.mathObject);                
            }
            self.mathObject.total = self.mathObject.incomeTotal + self.mathObject.expTotal;
            // console.log('mathObject.total is: ', self.mathObject.total);
            
        })
    };

    self.getCalendar = function () {
        // console.log('Get math function was triggered');
        $http.get('/info/calendar').then(function (response) {
            console.log('Calendar get route brought back: ', response.data);
            for (var i = 0; i < response.data.length; i++) {
                var event = response.data[i];
                dateObject = {};
                dateObject.title = event.description;
                dateObject.start = event.date;
                self.domCalendarObject.list.push(dateObject);  
            }
            console.log('domObject is now: ', self.domCalendarObject.list);
        })
    };
    self.getCalendar();

    self.addTransaction = function (newTransaction) {
        console.log('add item function was initiated');
        $http.post('/info', newTransaction).then(function (response) {
            self.getTransactions();
            
        })//end of post success function      
    }//end of additem function

    self.updateTransaction = function (updatedTransaction) {
        // console.log('Update Transactions function was triggered');
        // console.log('updatedTransaction is: ', updatedTransaction);
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