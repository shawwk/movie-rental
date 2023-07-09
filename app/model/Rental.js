Ext.define('MovieRental.model.Rental',{
    extend: 'Ext.data.Model',
    alias: 'model.rentalModel',
    idProperty: 'Id',

    fields: [
        { name: 'Id', type: 'int'},
        { name: 'Customer', type: 'string'},
        { name: 'TransactionCode', type: 'string'},
        // { name: 'RentalDate', type: 'date' }
    ],
    hasMany: {
        model: 'MovieRental.model.RentalDetails',
        name: 'rentalDetails'
    }
});