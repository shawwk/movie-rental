Ext.define('MovieRental.model.Movie',{
    extend: 'Ext.data.Model',
    idProperty: 'Id',

    alias: 'model.movieModel',

    fields: [
        { name:'Id', type: 'int',  persist : false },
        { name: 'Title', type: 'string' },
        { name: 'Genre', type: 'string' },
        { name: 'Director', type: 'string'}
    ]
});