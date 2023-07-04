Ext.define('MovieRenta.customer.CustomerViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.customerViewModel',
    deep: true,
    data: {
        selectedCustomer: null
    },
    stores: {
        customers: {
            model: 'MovieRental.model.Customer',
            type: 'customerStore',
            // autoLoad: true
        }
    },
});