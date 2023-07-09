Ext.define('MovieRental.view.rental.MovieLookup',{
    extend: 'Ext.grid.Panel',
    floating: true,
    width: 400,
    height: 200,
    closable: true,
    modal: true,

    title: 'Select Movie',

    viewModel: {
        type: 'rentalViewModel'
    },

    bind: {store:'{movies}', selection: "{selectedMovie}"},
    controller:  'rentalController',


    // columns: [{
    //     dataIndex: 'Id',
    //     hidden: true
    // },
    // {
    //     text: 'Title',
    //     flex: 1,
    //     dataIndex: 'Title',
    //     bind: '{movies.Title}'
    // },
    // {
    //     text: 'Genre',
    //     flex: 1,
    //     dataIndex: 'Genre',
    //     bind: '{movies.Genre}'
    // },
    // {
    //     text: 'Director',
    //     flex: 1,
    //     dataIndex: 'Director',
    //     bind: '{movies.Director}'
    // }],
    // // selModel: 'checkboxmodel',
    // listeners:{
    //     itemclick: 'onSelectedMovie'
    // }
})