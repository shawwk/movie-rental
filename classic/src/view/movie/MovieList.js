Ext.define('MovieRental.view.movie.MovieList',{
    extend: 'Ext.grid.Panel',
    // requires:[
    //     'MovieRental.view.movie.MovieController',
    //     'MovieRental.view.movie.MovieViewModel'
    // ],
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
    }]
})