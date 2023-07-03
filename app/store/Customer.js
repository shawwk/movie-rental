var url = 'https://localhost:44321/';

Ext.define('MovieRental.store.Customer',{
extend: 'Ext.data.Store',

alias: 'store.customer',

model: 'MovieRental.model.Customer',
proxy:
{
    type: 'ajax',
    // url: 'https://localhost:44321',
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
},
autoLoad: true
});