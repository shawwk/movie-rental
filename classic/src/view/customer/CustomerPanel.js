Ext.define('MovieRental.view.CustomerPanel', {

    extend: 'Ext.window.Window',

    controller: 'customerController',

    title: 'New customer',
    width: 400,
    height: 215,
    floating: true,
    layout: 'form',
    modal: true,
    viewModel: { 
        type: 'customerViewModel'
    },
    bind: {
        title: '{selectedCustomer.Name}'
    },
    items:[{
        xtype: 'form',
        reference: 'customerForm',
        items:[{
            xtype: 'textfield',
            fieldLabel: 'Name',
            bind: '{customerInfo.Name}',
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Address',
            bind: '{customerInfo.Address}'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Contact',
            bind: '{customerInfo.Contact}'
        }],
        buttons: [{
            text: 'Save',
            handler: 'onSaveCustomer'
        }]
    }]
});