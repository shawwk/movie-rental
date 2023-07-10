Ext.define('MovieRental.model.RentalDetails',{
    extend: 'Ext.data.Model',
    alias: 'model.rentalDetailModel',
    idProperty: 'MovieId',

    fields: [
        { name: 'Id', type: 'int', persist: false },
        { name: 'MovieId', type: 'int' },
        { name: 'Title', type: 'string' },
        { name: 'Genre', type: 'string' },
        { name: 'Director', type: 'string' }
        
    ],
//  belongsTo: 'MovieRental.model.Rental'
});