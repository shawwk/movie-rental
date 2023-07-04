var url = 'https://localhost:44321/';

Ext.define('MovieRental.store.Customer',{
extend: 'Ext.data.Store',

alias: 'store.customerStore',

model: 'MovieRental.model.Customer',

pageSize: 2,
proxy:
{
    type: 'rest',
    api:{
        read: url + 'api/customer/list',
        create: url + 'api/customer/add',
        update: url + 'api/customer/update',
        destroy: url + 'api/customer/delete/{Id}'
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