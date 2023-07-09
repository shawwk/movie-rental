Ext.define('MovieRental.view.rental.RentalController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.rentalController',

    onAddForm: function(){
        var modal = Ext.create('MovieRental.view.rental.RentalForm');
        modal.getViewModel().set('rentals', this.getViewModel().getStore('rentals'));
        modal.show();

    },

    lookupMovie: function(){
        var modal = Ext.create('MovieRental.view.rental.MovieLookup',{
            viewModel: {
                data: {
                    selectedMovie: null
                }
            }
        });
        // modal.setPosition(1150, 300, true);
        modal.getViewModel().set('selectedMovies', this.getViewModel().getStore('selectedMovies'))
        modal.show();
    },

    onSelectedMovie: function(grid, record, item, index, e, eOpts){
        var vm = this.getViewModel();
        var model = vm.get('selectedMovie');
        var selected = vm.get('selectedMovies');
        // model = record.data;
        // if(!model){
        //     model = record.data;
        // }
        // selected.add(model);
        // console.log(model);
        model = record;
        selected.add(model);
        console.log(model);

    },
    
    onRentals: function(){
        var vm = this.getViewModel();
        console.log(vm);
    },

    onSyncRental: function(){
var rentedMovies = [];
var grid = this.getView().down('grid');
var vm = this.getViewModel();
var store = vm.get('rentals');
var customerId = vm.get('selectedCustomer');
var selectedMovies = grid.getSelectionModel().getSelection();

Ext.Array.each(selectedMovies, function (selectedMovie) {
  var movie = Ext.create('MovieRental.model.RentalDetails', {
    MovieId: selectedMovie.get('Id'),
  });

  rentedMovies.push(movie.data);
});

var rentalHeader = Ext.create('MovieRental.model.Rental', {
  customerId: customerId,
  rentalDetails: rentedMovies,
});

// console.log(rentalHeader);
store.add(rentalHeader);
store.sync({
  success: function (response, request) {
    store.load();
    console.log('Rental transaction submitted successfully.');
  },
  failure: function () {
    console.error('Failed to submit rental transaction.');
  },
});
    }
});