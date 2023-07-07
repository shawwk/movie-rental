Ext.define('MovieRenta.customer.CustomerViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.customerViewModel',
    data: {
        customerInfo: null,
        title: '',
        create: null
    },
    stores: {
        customers: {
            type: 'customerStore',
            autoLoad: true,
            autoSync: false
        }
    },
});