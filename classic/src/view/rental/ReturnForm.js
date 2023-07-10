Ext.define('MovieRental.view.rental.ReturnForm', {
    extend: 'Ext.window.Window',

    floating: true,
    modal: true,
    // layout: 'vbox',
    width: 400,
    height: 600,
    bodyPadding: 20,

    title: 'Return Movies',

    controller: 'rentalController',

    viewModel: {
        type:'rentalViewModel'
    },

    items:[{
        xtype: 'grid',
        height: 500,
        bind: {
            store: '{rentedMovies}'
        },
        columns: [{
            dataIndex: 'Id',
            hidden: true
           },
           {
               text: 'Title',
               dataIndex: 'Title',
               bind: '{rentedMovies.Title}'
           },
           {
               text: 'Genre',
               dataIndex: 'Genre',
               bind: '{rentedMovies.Genre}'
           },
           {
               text: 'Director',
               dataIndex: 'Director',
               bind: '{rentedMovies.Director}'
           }
           ],
           selModel: 'checkboxmodel',
           
    }],
    buttons:[{
        text: 'Return',
        handler: 'onReturnMovies'
    },
    {
        text: 'Cancel',
        handler: 'onCancel'
    }]
    
});
