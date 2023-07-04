
Ext.define('MovieRental.view.customer.CustomerController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.customerController',

    onAddButtonClick: function() {
        var modal = Ext.create('MovieRental.view.CustomerPanel');
        modal.getViewModel().set('customers' ,this.getViewModel().getStore('customers'));
        modal.show();
    },
    
    onSaveCustomer: function() {
        var me = this;
        var vm = me.getViewModel();
        var store = vm.get('customers');
        store.add(vm.data.customerInfo);
        store.sync({
            success: function(response, request){
                me.toast('Account Successfully Created!');
                me.getView().destroy();
            },
            failure: function(){
                me.toast('Error! Problem creating account');
            }
        });
    },
    toast: function(msg){
        Ext.toast({
            html: msg,
            colasable: false,
            align: 'b',
            slideDuration: 300,
            maxWidth: 400
        })
    }
});