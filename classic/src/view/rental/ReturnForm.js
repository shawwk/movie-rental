Ext.create('Ext.grid.Panel',{
    xtype: 'grid',
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
        handler: 'onCancel'
    }]
});