Ext.define('MovieRental.view.customer.CustomerList', {
    extend: 'Ext.grid.Panel',

    xtype: 'customerList',
    tbar: [{
        xtype: 'button',
        text: 'Add Customer',
        width: 130,
        handler: 'onAddButtonClick'
    }],
    // bbar:{
    //     xtype: 'pagingtoolbar',
    //     displayInfo: true
    // },

    title: 'Customer List',

    bind: { store: '{customers}'},

    viewModel: { 
        type: 'customerViewModel'
    },

    controller: 'customerController',

    columns: [{
        text: "Id",
        flex: 1,
        dataIndex: 'Id',
        hidden: true
    },
    {
        text: "Name",
        flex: 1,
        dataIndex: 'Name',
        bind: '{customers.Name}'
    },
    {
        text: "Address",
        flex: 1,
        dataIndex: 'Address',
        bind: '{customers.Address}'
    },
    {
        text: "Contact",
        flex: 1,
        dataIndex: 'Contact',
        bind: '{customers.Contact}'
    }]
});