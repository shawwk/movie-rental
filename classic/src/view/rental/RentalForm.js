Ext.define('MovieRental.view.rental.RentalForm',{
    extend: 'Ext.window.Window',

    viewModel: {
        type: 'rentalViewModel'
    },

    controller: 'rentalController',

    title: 'New Rent',

    floating: true,
    modal: true,
    // layout: 'vbox',
    width: 400,
    height: 600,
    bodyPadding: 20,
    closeAction : 'hide',

    items: [
      {
        xtype: 'form',
        height: 150,
        items: [{
            xtype: 'datefield',
            reference: 'rentalDate',
            fieldLabel: 'Date',
            format: 'd-M-Y',
            value: Ext.Date.add(new Date()),
            readOnly: true
        },
        {
            xtype: 'combobox',
            fieldLabel: 'Customer name:',
            displayField: 'Name', 
            valueField: 'Id',
            triggerAction: 'all',
            queryMode: 'local',
            minChars: 3,
            
            bind: {
                store: '{customers}',
                value: '{selectedCustomer}'
            }
        }
    ]},
    {
        xtype: 'grid',
        height: 600,
        bind: {
            store: '{movies}'
        },
            columns: [{
            dataIndex: 'Id',
            hidden: true
           },
           {
               text: 'Title',
               dataIndex: 'Title',
               bind: '{movies.Title}'
           },
           {
               text: 'Genre',
               dataIndex: 'Genre',
               bind: '{movies.Genre}'
           },
           {
               text: 'Director',
               dataIndex: 'Director',
               bind: '{movies.Director}'
           }
           ],
           selModel: 'checkboxmodel',
          
    }]    ,
    buttons:[{
        text: 'Save',
        handler: 'onSyncRental'
    },
    {
        text: 'Cancel',
        handler: 'onCancel'
    }]
});