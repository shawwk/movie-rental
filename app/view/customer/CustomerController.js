
Ext.define('MovieRental.view.customer.CustomerController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.customerController',

    onAddButtonClick: function() {
        var modal = Ext.create('MovieRental.view.CustomerForm',{
            viewModel: {
                data: {
                    title: 'Add Customer',
                    create: true
                }
            }
        });
        modal.getViewModel().set('customers', this.getViewModel().getStore('customers'));
        modal.show();
    },

    onEditButtonClick: function(grid, rowIndex, colIndex, item, e, record){
        var modal = Ext.create('MovieRental.view.CustomerForm',{
            viewModel: {
                data: {
                    customerInfo: record,
                    title: 'Edit Customer',
                    create: false
                }
            }
        });
        modal.getViewModel().set('customers', grid.getStore());
        console.log(grid);
        modal.show();
    },
    
    onSaveCustomer: function() {

        var me = this;
        var vm = me.getViewModel();
        var store = vm.get('customers');
        if(vm.data.customerInfo){
            store.add(vm.data.customerInfo);
        } else{
            me.toast('Please Fill all the fields!');
        }

        store.sync({
            success: function(){
                me.toast('Customer Successfully Created!');
                me.getView().destroy();
                store.load();
            },
            failure: function(){
                me.toast('Error! Problem Creating Customer');
                store.rejectChanges();
            }
        });
    },

    onUpdateCustomer: function(){
        var me = this;
        var vm = me.getViewModel();
        var store = vm.get('customers');
        var customer = vm.get('customerInfo');

        store.sync({
            params:{
                Id: customer.get('Id')
            },
            success: function(){
                me.toast('Customer Successfully Updated!');
                me.getView().destroy();
            },
            failure: function(){
                me.toast("Error! Problem Updating Customer");
                store.rejectChanges();
            }
        });
    },

    onDeleteCustomer: function(grid, rowIndex, colIndex, item, e, record){
        var me = this;
        var store = grid.getStore();
        Ext.Msg.confirm('Delete Changes', 'Do you want to remove customer '+'"' + record.get('Name') + '"', function(choice){
            if(choice == 'yes'){

                var customerId = record.get('Id');
                store.remove(record);
                store.sync({
                    params: {
                        Id: customerId
                    },
                    success: function(response, request){
                        me.toast("Customer Successfully Removed!");
                        store.load();
                    },
                    failure: function(response, request){
                        me.toast("Error! Problem Deleting Customer");
                        store.rejectChanges();
                    }
                });
            }
        });
    },

    onCancel: function(){
        var me = this;
        var vm = me.getViewModel();
        var store = vm.get('customers');
        store.rejectChanges();
        this.getView().destroy();
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