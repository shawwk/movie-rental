Ext.define('MovieRental.view.CustomerPanel', {

    extend: 'Ext.window.Window',

    controller: 'customer-controller',

    title: 'New customer',

    width: 400,
    height: 300,
    floating: true,
    modal: true,

    // store: {
    //     type: 'customer'
    // },
    viewModel: {
        stores: {
            myStore: {
                type: 'customer'
            }
        }
    },
    items:[{
        xtype: 'form',
        reference: 'newCustomerForm',
        items:[{
            xtype: 'textfield',
            fieldLabel: 'Name',
            bind: '{myStore.Name}'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Address',
            bind: '{myStore.Address}'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Contact',
            bind: '{myStore.Contact}'
        }],
        buttons: [{
            text: 'Save',
            handler: 'onSaveCustomer'
        }]
    }]
});