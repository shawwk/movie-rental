Ext.define('MovieRental.store.Rental',{
    extend: 'Ext.data.Store',
    alias: 'store.rentalStore',

    model: 'MovieRental.model.Rental',

    proxy: {
        type: 'rest',
        noCache: false,
        // url: 'https://localhost:44321/api/rental/list',
        api: {
            read: 'https://localhost:44321/api/rental/list',
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