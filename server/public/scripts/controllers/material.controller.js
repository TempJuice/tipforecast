myApp.controller('MaterialController', function ($mdDialog, $mdToast) {
    console.log('MaterialController Loaded');

    var vm = this;
    // vm.showConfirm = function (ev) {
       
    //         var confirm = $mdDialog.confirm()
    //             .title('Are you sure??')
    //             .textContent('This will delete your item')
    //             .ariaLabel('Lucky Day')
    //             .ok('Got it!')
    //             .cancel('Nevermind')
                
    //         $mdDialog.show(confirm).then(function () {
    //             vm.status = 'You decided to get rid of your debt.';
    //         }, function () {
    //             vm.status = 'You decided to keep your debt.';
    //         });
        
    // };//end of vm.showAlert

});//end of MaterialController