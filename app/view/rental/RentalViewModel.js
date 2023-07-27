Ext.define('MovieRental.view.rental.RentalViewModel',{
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.rentalViewModel',

    data: {
        selectedMovie: null,
        selectedCustomer: null,
        selectedRent: null,
    },

    stores:{
        rentals: {
            type: 'rentalStore',
            autoLoad: false,
            autoSync: false
        },
        movies: {
            type: 'movieStore',
            autoLoad: false,
            autoSync: false,
            filters: [{
                property: 'AvailabilityStatus',
                value: true,
                exactMatch: true
            }]
        },
        customers: {
            type: 'customerStore',
            autoLoad: false,
            autoSync: false
        },
        rentedMovies: {
            type: 'rentalDetailStore',
            autoLoad: false,
            autoSync: false
        }
    }
});