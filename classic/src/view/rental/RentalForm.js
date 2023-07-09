var gridMovies = Ext.create('Ext.grid.Panel',{
    xtype: 'grid',
    region: 'center',
    width: '100%',
    height: 365,
    viewModel: {
        type:'rentalViewModel'
    },

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
    buttons:[{
        text: 'Save',
        handler: 'onSyncRental'
    },
    {
        text: 'Cancel',
        handler: function(){
            // var me = this;
            // var store = me.getStore('movies');
            // store.rejectChanges();
        }
    }]
});

Ext.define('MovieRental.view.rental.RentalForm',{
    extend: 'Ext.window.Window',

    viewModel: {
        type: 'rentalViewModel'
    },

    controller: 'rentalController',

    title: 'New Rent',

    floating: true,
    modal: true,
    layout: 'vbox',
    width: 400,
    height: 600,
    bodyPadding: 20,
    // items:[{
    //     xtype: 'movieGrid'
    // }],
    items: [
      {
        xtype: 'form',
        region: 'north',
        height: 150,
        items: [{
            xtype: 'datefield',
            reference: 'rentalDate',
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
            minChars: 3,
            
            bind: {
                store: '{customers}',
                value: '{selectedCustomer}'
            }
        }]},gridMovies]    
})