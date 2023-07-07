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
            autoLoad: true,
            autoSync: false
        }
    }
});