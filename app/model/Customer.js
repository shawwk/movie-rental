Ext.define('MovieRental.model.Customer', {
    extend: 'Ext.data.Model',
    idProperty: 'Id',

    fields: [
        {name: 'Id', type: 'int'},
        {name: 'Name', type: 'string'},
        {name: 'Address', type: 'string'},
        {name: 'Contact', type: 'string'}
    ]
});