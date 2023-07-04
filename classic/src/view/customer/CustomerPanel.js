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
            // name: 'Name',
            fieldLabel: 'Name',
            bind: '{customerInfo.Name}',
        },
        {
            xtype: 'textfield',
            // name: 'Address',
            fieldLabel: 'Address',
            bind: '{customerInfo.Address}'
        },
        {
            xtype: 'textfield',
            // name: 'Contact',
            fieldLabel: 'Contact',
            bind: '{customerInfo.Contact}'
        }],
        buttons: [{
            text: 'Save',
            handler: 'onSaveCustomer'
        }]
    }]
});