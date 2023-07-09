Ext.define('MovieRental.model.RentalDetails',{
    extend: 'Ext.data.Model',
    alias: 'model.rentalDetailModel',
    idProperty: 'MovieId',

    fields: [
        { name: 'Id', type: 'int', persist: false},
        { name: 'MovieId', type: 'int'},
        
    ],
//  belongsTo: 'MovieRental.model.Rental'
});