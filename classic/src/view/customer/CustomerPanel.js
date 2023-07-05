Ext.define('MovieRental.view.CustomerPanel', {

    extend: 'Ext.form.Panel',

    controller: 'customerController',

    title: 'Customer Form',
    width: 340,
    height: 250,
    floating: true,
    layout: 'form',
    modal: true,
    viewModel: { 
        type: 'customerViewModel'
    },

    bind:{
        title: '{title}'
    },

    items:[{
        xtype: 'form',
        // reference: 'customerForm',
        items:[{
            xtype: 'textfield',
            bind: '{customerInfo.Id}',
            hidden: true
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Name',
            bind: '{customerInfo.Name}'
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
            handler: 'onSaveCustomer',
            bind:{
                hidden: '{!create}'
            }
        },
        {
            text: 'Update',
            handler: 'onUpdateCustomer',
            bind:{
                hidden: '{create}'
            }
        },
        {
            text: 'Cancel',
            handler: 'onCancel'
        }]
    }]
});