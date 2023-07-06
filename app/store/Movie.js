Ext.define('MovieRental.store.Movie',{
    extend: 'Ext.data.Store',
    alias: 'store.movieStore',

    model: 'MovieRental.model.Movie',

    data:{
        movieDetail: null
    },

    proxy: {
        type: 'rest',
        noCache: false,
        url: 'https://localhost:44321/api/movie/list',
        api: {
            read: 'https://localhost:44321/api/movie/list',
            create: 'https://localhost:44321/api/movie/add',
            update: 'https://localhost:44321/api/movie/update?',
            destroy: 'https://localhost:44321/api/movie/delete?'

        },
        reader:{
            type: 'json'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }
    }
    
})