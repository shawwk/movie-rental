Ext.define('MovieRental.view.MovieForm', {
    extend: 'Ext.window.Window',

    controller: 'movieController',

    title: 'Movie Form',
    layout: 'form',
    modal: true,
    floating: true,
    viewModel: {
        type: 'movieViewModel'
    },
    bind:{
        title: '{title}'
    },
    layout: 'form',    
    items:[{
        xtype: 'form',
        items: [{
            xtype: 'textfield',
            bind: '{movieDetail.Id}',
            hidden: true
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Movie Title',
            bind: '{movieDetail.Title}'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Genre',
            bind: '{movieDetail.Genre}'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Director',
            bind: '{movieDetail.Director}'
        }],
        buttons: [{
            text: 'Save',
            handler: 'onAddMovie',
            bind: {
                hidden: '{!create}'
            }
        },
        {
            text: 'Update',
            handler: 'onUpdateMovie',
            bind: {
                hidden: '{create}'
            }
        },
        {
            text: 'Cancel',
            handler: 'onCancel'
        }]
    }]

});