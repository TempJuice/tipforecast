myApp.service('SummaryService', function ($http) {
    var self = this;

    // self.getDateObjects = function () {
    //     // console.log('Get Transactions function was triggered');
    //     $http.get('/summary').then(function (response) {
    //         console.log('date objects get route brought back: ', response.data);
    //         // console.log('date format is: ', response.data.date);

    //         // self.transactionsObject.list = response.data;
    //         // console.log('Transactions Object: ', self.transactionsObject.list);
    //     })//end of get success function
    // }//end of getTransactions function

});//end of SummaryService