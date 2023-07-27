Ext.define('MovieRental.view.customer.Customers', {
    extend: 'Ext.grid.Panel',

    xtype: 'customerList',
    tbar: [{
        xtype: 'button',
        text: 'Add Customer',
        width: 130,
        handler: 'onAddButtonClick'
    }],

    title: 'Customers',

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
        // bind: '{customers.Name}'
    },
    {
        text: "Address",
        flex: 1,
        dataIndex: 'Address',
        // bind: '{customers.Address}'
    },
    {
        text: "Contact",
        flex: 1,
        dataIndex: 'Contact',
        // bind: '{customers.Contact}'
    },{
        text: 'Actions',
        xtype:'actioncolumn',
        width: 'auto',
        items: [{
            xtype: 'button',
            iconCls: 'fas fa-edit',
            tooltip: 'Edit',
            handler : 'onEditButtonClick'
        },{
            iconCls:'fa fa-trash',
            tooltip: 'Delete',
            handler : 'onDeleteCustomer'
        }]
    }]
});