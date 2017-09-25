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
        dateObject.title = event.description + ' ' + event.amount;
        dateObject.start = event.date;
        dateObject.allDay = true;
        vm.domCalendarObject.list.push(dateObject);
      }
      console.log('domObject is now: ', vm.domCalendarObject.list);
    })
  };
  vm.getCalendar();

  vm.dateArray = vm.domCalendarObject.list;



  
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
