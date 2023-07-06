Ext.define('MovieRental.view.movie.MovieViewModel',{
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.movieViewModel',
    data:{
        movieInfo: null
    },
    stores: {
        movies: {
            model: 'MovieRental.model.Movie',
            type: 'movieStore',
            autoLoad: true,
            autoSync: false
        }
    }
})