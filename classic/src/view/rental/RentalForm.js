Ext.define('MovieRental.view.rental.RentalForm',{
    extend: 'Ext.window.Window',

    viewModel: {
        type: 'rentalViewModel'
    },

    controller: 'rentalController',

    title: 'Rentals Details',

    floating: true,
    layout: 'form',
    width: 400,
    height: 600,

    items: [
      {
        xtype: 'form',
        region: 'north',
        height: 150,
        items: [{
            xtype: 'datefield',
            fieldLabel: 'Date',
            format: 'd-M-Y',
            value: Ext.Date.add(new Date(), Ext.Date.DAY),
            readOnly: true
        },
        {
            xtype: 'combobox',
            fieldLabel: 'Customer name:',
            displayField: 'Name', 
            valueField: 'Id',
            triggerAction: 'all',
            queryMode: 'local',
            minChars: 5,
            bind: {
                store: '{customers}'
            }
        },
        {
            xtype: 'combobox',
            fieldLabel: 'Movie:',
            displayField: 'Title', 
            valueField: 'Id',
            triggerAction: 'all',
            queryMode: 'local',
            minChars: 5,
            bind: {
                store: '{movies}'
            },
            listeners: { 
                select: function(combo, records) {
                   console.log(records);
                }}
        }],
        // buttons:[{
        //     text: 'Select Movie',
        //     handler: 'onSelectMovie'
        // }]
      },
      {
        xtype: 'grid',
        region: 'center',
        width: '100%',
        height: 390,

        columns: [{
         dataIndex: 'Id',
         hidden: true
        },
        {
            text: 'Title',
            bind: '{selectedMovies.Title}'
        },
        {
            text: 'Genre',
            bind: '{selectedMovies.Genre}'
        },
        {
            text: 'Director',
            bind: '{selectedMovies.Director}'
        },
        {
            text: 'Actions',
            xtype:'actioncolumn',
            width: 'auto',
            items: [{
                xtype: 'button',
                conCls: 'fas fa-edit',
                tooltip: 'Edit',
                handler : 'onEditForm'
        },
        {
            iconCls:'fa fa-trash',
            tooltip: 'Delete',
            handler : 'onDeleteCustomer'
            }]
        }],
        buttons:[{
            text: 'Update'
        },
        {
            text: 'Cancel'
        }]
      }
    ]
    
})