Ext.define('MovieRental.store.RentalDetails',{
    extend: 'Ext.data.Store',
    alias: 'store.rentalDetailStore',

    model: 'MovieRental.model.RentalDetails',

    proxy: {
        type: 'rest',
        noCache: false,
        autoLoad: false,
        url: 'https://localhost:44321/',
        api: {
            read: 'https://localhost:44321/api/rental/details',
            create: 'https://localhost:44321/api/rental/add',
            update: 'https://localhost:44321/api/rental/update?',
            destroy: 'https://localhost:44321/api/rental/delete?'

        },
        reader:{
            type: 'json'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }
    }
});