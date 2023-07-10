Ext.define('MovieRental.view.rental.RentalController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.rentalController',

    init: function(){
        var me = this;
        var vm = me.getViewModel();
        var store = vm.get('rentals');
        store.load();
    },

    onAddForm: function(){
        var me = this;
        var vm = me.getViewModel();
        var store = vm.get('movies');
        var customerStore = vm.get('customers');
        customerStore.load();
        store.load();

        var modal = Ext.create('MovieRental.view.rental.RentalForm');
        modal.getViewModel().set('rentals', this.getViewModel().getStore('rentals'));
        modal.getViewModel().set('movies', store);
        modal.getViewModel().set('customers', customerStore);
        modal.show();

    },

    onSyncRental: function(){

        var me = this;
        var rentedMovies = [];
        var grid = me.getView().down('grid');
        var vm = me.getViewModel();
        var storeRentals = vm.get('rentals');
        var customerId = vm.get('selectedCustomer');
        var selectedMovies = grid.getSelectionModel().getSelection();

        Ext.Array.each(selectedMovies, function (selectedMovie) {
            var movie = Ext.create('MovieRental.model.RentalDetails', {
            MovieId: selectedMovie.get('Id'),
        });
            rentedMovies.push(movie.data);
        });

        var rental = Ext.create('MovieRental.model.Rental', {
            customerId: customerId,
            rentalDate: Ext.Date.add(new Date(), Ext.Date),
            rentalDetails: rentedMovies,
        });


        storeRentals.add(rental);
        storeRentals.sync({
            success: function (response, request) {
                storeRentals.load();
                me.toast('Rental transaction submitted successfully.');
                me.getView().destroy();
            },
            failure: function () {
                me.toast('Failed to submit rental transaction.');
                storeRentals.rejectChanges();
            },
        });
    },

    onViewRents: function(grid, rowIndex, colIndex, item, e, record){
        var rented = this.getViewModel().getStore('rentedMovies');
        var modal = Ext.create('MovieRental.view.rental.ReturnForm',{
            viewModel:{
                data:{
                    selectedCustomer: record.data.Id
                }
            }
        });

        rented.load({
        params: {
                rentalId: record.data.Id
            }
        });

        modal.getViewModel().set('rentedMovies', rented);
        modal.show();
    },

    onReturnMovies: function(){

    },

    onDeleteRent: function(grid, rowIndex, colIndex, item, e, record){
        var me = this;
        var store = grid.getStore();
        Ext.Msg.confirm('Delete Changes', 'Do you want to remove rental with Transaction Code '+'"' + record.get('TransactionCode') + '"', function(choice){
            if(choice == 'yes'){
                store.remove(record);
                store.sync({
                    params: {
                        Id: record.get('Id')
                    },
                    success: function(response, request){
                        me.toast("Rental Successfully Removed!");
                    },
                    failure: function(response, request){
                        me.toast("Error! Problem Deleting Rental");
                        store.rejectChanges();
                    }
                });
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
    },

    onCancel: function(){
        var me = this;
        var vm = me.getViewModel();
        var store = vm.get('rentals');
        store.rejectChanges();
        this.getView().destroy();
    }

    
});