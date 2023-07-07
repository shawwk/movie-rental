Ext.define('MovieRental.view.rental.RentalController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.rentalController',

    onAddForm: function(){
        var modal = Ext.create('MovieRental.view.rental.RentalForm');
        modal.getViewModel().set('rentals', this.getViewModel().getStore('rentals'));
        modal.show();
    },

    onSelectMovie: function(){
        var modal = Ext.create('MovieRental.view.rental.MovieLookup');
        modal.setPosition(1150, 300, true);
        modal.show();
    },

    onSelectedMovie: function(grid, record, item, index, e, eOpts){
        var me = this;
        var vm = me.getViewModel();
        console.log(record);
        var store = vm.get('selectedMovies');
        store.add(record.data);
    }
});