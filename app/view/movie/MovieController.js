Ext.define('MovieRental.view.movie.MovieController',{
    extend: 'Ext.app.ViewController',

    alias: 'controller.movieController',

    onMovieForm: function(){
        var modal = Ext.create('MovieRental.view.MovieForm');
        modal.getViewModel().set('movies', this.getViewModel().getStore('movies'));
        modal.show();
    }
})