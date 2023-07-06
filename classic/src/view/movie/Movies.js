Ext.define('MovieRental.view.movie.Movies',{
    extend: 'Ext.grid.Panel',

    xtype: 'movieList',
    tbar: [{
        xtype:'button',
        text: 'Add Movie',
        width: 130,
        handler: 'onMovieForm'
    }],

    title: 'Movies',

    bind: { store: '{movies}'},

    viewModel: {
        type: 'movieViewModel'
    },

    controller: 'movieController',
    columns: [{
        dataIndex: 'Id',
        bind: '{movies.Id}',
        hidden: true
    },
    {
        text: 'Title',
        flex: 1,
        dataIndex: 'Title',
        bind: '{movies.Title}'
    },
    {
        text: 'Genre',
        flex: 1,
        dataIndex: 'Genre',
        bind: '{movies.Genre}'
    },
    {
        text: 'Director',
        flex: 1,
        dataIndex: 'Director',
        bind: '{movies.Director}'
    },
    {
        text: 'Actions',
        xtype: 'actioncolumn',
        width: 'auto',
        items: [{
            xtype: 'button',
            iconCls: 'fas fa-edit',
            tooltip: 'Edit',
            handler: 'onEditMovie'

        },
        {
            xtype: 'button',
            iconCls: 'fas fa-trash',
            tooltip: 'Delete',
            handler: 'onDeleteMovie'
        }]  
    }]
})