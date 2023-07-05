Ext.define('MovieRental.model.Customer', {
    extend: 'Ext.data.Model',
    idProperty: 'Id',

    alias: 'model.customerModel',

    fields: [
        { name: 'Id', type: 'int',  persist : false},
        { name: 'Name', type: 'string' },
        { name: 'Address', type: 'string' },
        { name: 'Contact', type: 'string' }
    ]
});