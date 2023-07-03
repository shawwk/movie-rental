Ext.define('MovieRental.view.customer.CustomerList', {
    extend: 'Ext.grid.Panel',

    xtype: 'customerList',
    tbar: [{
        xtype: 'button',
        text: 'New Customer',
        width: 130,
        handler: 'onAddButtonClick'
    }],

    title: 'Customer List',

    store: { type: 'customer'},
    controller: 'customer-controller',

    columns: [{
        text: "Name",
        flex: 1,
        dataIndex: 'Name'
    },
    {
        text: "Address",
        flex: 1,
        dataIndex: 'Address'
    },
    {
        text: "Contact",
        flex: 1,
        dataIndex: 'Contact'
    }]
});