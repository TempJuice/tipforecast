myApp.controller('UserController', function (UserService, TransactionService, $http) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;

  //Global object to store calendar data
  vm.domCalendarObject = { list: [] }

  // vm.mathObject = TransactionService.mathObject;
  vm.mathObject = {
    incomeTotal: 0,
    expTotal: 0,
    total: 0
  };

  //function that formats db objects so calendar can populate
  vm.getCalendar = function () {
    // console.log('Get math function was triggered');
    $http.get('/info/calendar').then(function (response) {
      console.log('Calendar get route brought back: ', response.data);
      for (var i = 0; i < response.data.length; i++) {
        var event = response.data[i];
        dateObject = {};
        dateObject.title = event.description;
        dateObject.start = event.date;
        dateObject.allDay = true;
        vm.domCalendarObject.list.push(dateObject);
      }
      console.log('domObject is now: ', vm.domCalendarObject.list);
    })
  };
  vm.getCalendar();

  vm.dateArray = vm.domCalendarObject.list;



  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();
  var currentView = "month";
  // Sample moment.js commands
  // var date = new Date();
  // var d = date.getDate();
  // var m = date.getMonth();
  // var y = date.getFullYear();
  vm.uiConfig = {
    calendar: {
      height: 450,
      editable: true,
      header: {
        left: '',
        center: 'title',
        right: 'today prev,next'
      },
      themeSystem: 'jquery-ui',
      dayClick: vm.dayClick,
      eventDrop: vm.alertOnDrop,
      eventResize: vm.alertOnResize,
      eventClick: vm.eventClick,
      viewRender: vm.renderView
    }
  };

  vm.eventSources = [{

    events: vm.dateArray
  }];



  

  //Calendar input examples
  // { title: 'All Day Event', start: new Date(y, m, 1) },
  // { title: 'Long Event', start: new Date(y, m, d - 5), end: new Date(y, m, d - 2) },
  // { id: 999, title: 'Repeating Event', start: new Date(y, m, d - 3, 16, 0), allDay: false },
  // { id: 999, title: 'Repeating Event', start: new Date(y, m, d + 4, 16, 0), allDay: false },
  // { title: 'Birthday Party', start: new Date(y, m, d + 1, 19, 0), end: new Date(y, m, d + 1, 22, 30), allDay: false },
  // { title: 'Click for Google', start: new Date(y, m, 28), end: new Date(y, m, 29), url: 'http://google.com/' }

  vm.getMath = function () {
    // console.log('Get math function was triggered');
    $http.get('/info/math').then(function (response) {
      // console.log('Math get route brought back: ', response.data);
      for (var i = 0; i < response.data.length; i++) {
        var math = response.data[i];
        if (math.type === 'income') {
          vm.mathObject.incomeTotal += math.amount
        } else {
          vm.mathObject.expTotal -= math.amount
        }
        // console.log('mathObject is now: ', vm.mathObject);                
      }
      vm.mathObject.total = vm.mathObject.incomeTotal + vm.mathObject.expTotal;
      // console.log('mathObject.total is: ', vm.mathObject.total);
    })
  };
  //Calls function that calculates inc/exp totals for user
  vm.getMath();


});
