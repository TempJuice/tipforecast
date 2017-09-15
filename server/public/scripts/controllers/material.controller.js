myApp.controller('MaterialController', function ($mdDialog, $mdToast) {
    console.log('MaterialController Loaded');

    var vm = this;
    // $calendar = $('[ui-calendar]');

    // vm.uiConfig = {
    //     calendar: {
    //         lang: 'da',
    //         height: '100%',
    //         editable: true,
    //         header: {
    //             //left: 'month basicWeek basicDay',
    //             //center: 'title',
    //             right: 'today prev,next'
    //         },
    //         // eventClick: function (date, jsEvent, view) {
    //         //     $scope.alertMessage = (date.title + ' was clicked ');
    //         // },
    //         // dayClick: $scope.alertEventOnClick,
    //         // eventDrop: $scope.alertOnDrop,
    //         // eventResize: $scope.alertOnResize,
    //         // eventRender: $scope.eventRender
    //     }
    // };

    vm.eventSources = [ {
        title: 'Thing',
        start: new Date(2017, 9, 9)
    } ]

});//end of MaterialController