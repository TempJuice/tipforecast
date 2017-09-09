myApp.factory('UserService', function ($http, $location) {
  // console.log('UserService Loaded');
self=this;

  var userObject = {};
  var transactionsObject = {};
  return {
    userObject: userObject,
    transactionArray: transactionsObject,

    addItem: function (newIncomeItem) {
      // console.log('add item function was initiated');
      $http.post('/info', newIncomeItem).then(function (response) {
        console.log('Transaction post route brought back: ', response);
        // getTransactions();
      })//end of post success function      
    },//end of additem function
    
    getTransactions: function () {
      console.log('Get Transactions function was triggered');
      $http.get('/info').then(function (response) {
        console.log('Transactions get route brought back: ', response);
        transactionsObject.transactionArray = response.data;
      })//end of get success function
    },//end of getTransactions function

    

    getuser: function () {
      // console.log('UserService -- getuser');
      $http.get('/user').then(function (response) {
        if (response.data.username) {
          // user has a curret session on the server
          userObject.userName = response.data.username;
          // console.log('UserService -- getuser -- User Data: ', userObject.userName);
        } else {
          console.log('UserService -- getuser -- failure');
          // user has no session, bounce them back to the login page
          $location.path("/home");
        }
      }, function (response) {
        console.log('UserService -- getuser -- failure: ', response);
        $location.path("/home");
      });
    },//end of getuser function

    logout: function () {
      console.log('UserService -- logout');
      $http.get('/user/logout').then(function (response) {
        console.log('UserService -- logout -- logged out');
        $location.path("/home");
      });
    }
  };
});//end of logout function
