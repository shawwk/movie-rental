var url = 'https://localhost:44321/';

Ext.define('MovieRental.store.Customer',{
extend: 'Ext.data.Store',

alias: 'store.customerStore',

model: 'MovieRental.model.Customer',

pageSize: 2,
proxy:
{
    type: 'rest',
    noCache: false,
    api:{
        read: url + 'api/customer/list',
        create: url + 'api/customer/add',
        update: url + 'api/customer/',
        destroy: url + 'api/customer/delete?'
    },
    reader: {
        type: 'json'
    },
    writer: {
        type: 'json',
        writeAllFields: true
    }
}
});