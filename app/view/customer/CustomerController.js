Ext.define('MovieRental.view.customer.CustomerController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.customer-controller',
    
    onAddButtonClick: function() {
       var floatingScreen = Ext.create('MovieRental.view.CustomerPanel');
       floatingScreen.show();
    },
    onSaveCustomer: function() {
        var window = this.getView();
        var form = window.lookupReference('newCustomerForm');
        var viewModel = form.getViewModel();
        var store = viewModel.getStore('myStore');
        var record = form.getRecord();
            // var form = window.lookupReference('newCustomerForm');
            // var store = form.getViewModel().getStore('customerStore');
            // var record = form.getRecord();
            
            store.sync({
                success: function(batch, options) {
                    // Save successful
                    window.close();
                },
                failure: function(batch, options) {
                    // Save failed
                }
            });
    }
});