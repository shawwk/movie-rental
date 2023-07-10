Ext.define('MovieRental.view.movie.MovieViewModel',{
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.movieViewModel',
    data:{
        movieDetail: null,
        creat: null,
        title: null
    },
    stores: {
        movies: {
            type: 'movieStore',
            autoLoad: false,
            autoSync: false
        }
    }
});