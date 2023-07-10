

Ext.define('MovieRental.store.Customer',{
extend: 'Ext.data.Store',

alias: 'store.customerStore',

model: 'MovieRental.model.Customer',

pageSize: 2,
proxy:
{
    type: 'rest',
    noCache: false,
    autoLoad: false,
    api:{
        read: 'https://localhost:44321/api/customer/list',
        create: 'https://localhost:44321/api/customer/add',
        update: 'https://localhost:44321/api/customer/update?',
        destroy: 'https://localhost:44321/api/customer/delete?'
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