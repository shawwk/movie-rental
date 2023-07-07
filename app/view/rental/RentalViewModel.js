Ext.define('MovieRental.view.rental.RentalViewModel',{
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.rentalViewModel',

    data: {
        selectedMovie: null,
        selectedCustomer: null
    },
    stores:{
        rentals: {
            type: 'rentalStore',
            autoLoad: true,
            autoSync: false
        },
        movies: {
            type: 'movieStore',
            autoLoad: true,
            autoSync: false
        },
        customers: {
            type: 'customerStore',
            autoLoad: true,
            autoSync: false
        },
        selectedMovies: {
            type: 'customerStore',
            autoLoad: false,
            autoSync: false
        }
    }
});