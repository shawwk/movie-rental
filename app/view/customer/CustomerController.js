
Ext.define('MovieRental.view.customer.CustomerController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.customerController',

    onAddButtonClick: function() {
        var modal = Ext.create('MovieRental.view.CustomerPanel',{
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
        var modal = Ext.create('MovieRental.view.CustomerPanel',{
            viewModel: {
                data: {
                    customerInfo: record,
                    title: 'Edit Customer',
                    create: false
                }
            }
        });
        modal.getViewModel().set('customers', grid.getStore());
        modal.loadRecord(record);
        modal.show();
    },
    
    onSaveCustomer: function() {

        var me = this;
        var vm = me.getViewModel();
        var store = vm.get('customers');
        store.add(vm.data.customerInfo);

        store.sync({
            success: function(){
                me.toast('Customer Successfully Created!');
                me.getView().destroy();
                store.reload();
            },
            failure: function(){
                me.toast('Error! Problem Creating Customer');
                store.rejectChanges();
            }
        });
    },

    onUpdateCustomer: function(){
        var form = Ext.create('MovieRental.view.CustomerPanel');
        var vm = this.getViewModel();
        var store = vm.getStore('customers');
        // var record = store.getById(vm.data.customerInfo.data.Id);
        var newValues = vm.data.customerInfo.data;
        var record = form.getRecord();
        // form.updateRecord(newValues);
        // record.set(newValues);
        form.updateRecord(record);
        console.log(record);
        store.sync();
    },

    onDeleteCustomer: function(grid, rowIndex, colIndex, item, e, record){

        var me = this;
        var store = grid.getStore();
        Ext.Msg.confirm('Delete Changes', 'Do you want to delete', function(choice){
            if(choice == 'yes'){

                var id = record.get('Id');
                store.remove(record);
                store.sync({
                    params: {
                        customerId: id
                    },
                    success: function(response, request){
                        me.toast("Customer Successfully Deleted!");
                        store.reload();
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