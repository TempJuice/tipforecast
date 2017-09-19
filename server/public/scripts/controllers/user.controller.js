myApp.controller('UserController', function (UserService, TransactionService) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;


  TransactionService.getTransactions();

  vm.transactionArray = TransactionService.transactionsObject

 vm.dateArray = TransactionService.domCalendarObject.list;
  console.log( 'Array coming into controller: ', vm.dateArray);

  // objects come in like: {
  //   username: 'ryan',
  //   type: 'expenditure',
  //   date: '09/21/2017',
  //   description: 'Car payment',
  //   amount: 100
  // }




  // vm.transactionObjects = function () {
  //   console.log('this is something', TransactionService.transactionsObject);
  //   for (var i = 0; i < vm.transactionArray.list.length; i++) {
  //     var event = vm.transactionArray.list[i];
  //     console.log('this is the event', event);
      
  //     // event.title = transactionArray.list.description
      
  //   }

  // }

  // vm.transactionObjects();





  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();

  // vm.eventSources = {
  //   events: [
  //     { title: 'Big Event', start: new Date(y, m, 1) },
     
  //   ]
  // };


  vm.eventSources = {
    events: vm.dateArray
  };
  console.log('Array after being applied to calendar source: ', vm.dateArray);

  // vm.eventSources = {
  //   events: [{"title":"bar","start":"2017-09-19T05:00:00.000Z"},{"title":"serve","start":"2017-09-21T05:00:00.000Z"},{"title":"bar","start":"2017-09-26T05:00:00.000Z"},{"title":"Car payment","start":"2017-09-23T05:00:00.000Z"}]
  // };
  

  // { title: 'All Day Event', start: new Date(y, m, 1) },
  // { title: 'Long Event', start: new Date(y, m, d - 5), end: new Date(y, m, d - 2) },
  // { id: 999, title: 'Repeating Event', start: new Date(y, m, d - 3, 16, 0), allDay: false },
  // { id: 999, title: 'Repeating Event', start: new Date(y, m, d + 4, 16, 0), allDay: false },
  // { title: 'Birthday Party', start: new Date(y, m, d + 1, 19, 0), end: new Date(y, m, d + 1, 22, 30), allDay: false },
  // { title: 'Click for Google', start: new Date(y, m, 28), end: new Date(y, m, 29), url: 'http://google.com/' }


});
