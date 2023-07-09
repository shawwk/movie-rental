Ext.define('MovieRental.view.movie.MovieController',{
    extend: 'Ext.app.ViewController',

    alias: 'controller.movieController',

    onMovieForm: function(){
        var modal = Ext.create('MovieRental.view.MovieForm',{
            viewModel: {
                data:{
                    create: true,
                    title: 'Add Movie'
                }
            }
        });
        modal.getViewModel().set('movies', this.getViewModel().getStore('movies'));
        modal.show();
    },

    onAddMovie: function(){

        var me = this;
        var vm = me.getViewModel();
        var movieDetail = vm.get('movieDetail');
        var store = vm.get('movies');

        if(movieDetail){
            store.add(movieDetail);
        } else{
            me.toast('Please fill all fields!');
        }
        store.sync({
            success: function(){
                me.toast('Movie Successfully Created!');
                me.getView().destroy();
                store.load();
            },
            failure: function(){
                me.toast('Error! Problem Creating Movie');
                store.rejectChanges();
            }
        })
    },

    onEditMovie: function(grid, rowIndex, colIndex, item, e, record){
        var modal = Ext.create('MovieRental.view.MovieForm',{
            viewModel:{
                data: {
                    movieDetail: record,
                    title: 'Edit Movie',
                    create: false
                }
            }
        });
        modal.getViewModel().set('movies', grid.getStore());
        modal.show();
    },

    onUpdateMovie: function(){
        var me = this;
        var vm = me.getViewModel();
        var store = vm.get('movies');
        var movie = vm.get('movieDetail');

        store.sync({
            params:{
                Id: movie.get('Id')
            },
            success: function(response, request){
                console.log(response);
                me.toast('Movie Successfully Updated!');
                me.getView().destroy();
            },
            failure: function(){
                me.toast("Error! Problem Updating Movie");
                store.rejectChanges();
            }
        });
    },

    onDeleteMovie: function(grid, rowIndex, colIndex, item, e, record){
        var me = this;
        var store = grid.getStore();
        Ext.Msg.confirm('Delete Changes', 'Do you want to remove movie '+'"' + record.get('Title') + '"', function(choice){
            if(choice == 'yes'){
                store.remove(record);
                store.sync({
                    params: {
                        Id: record.get('Id')
                    },
                    success: function(response, request){
                        me.toast("Movie Successfully Removed!");
                    },
                    failure: function(response, request){
                        me.toast("Error! Problem Deleting Movie");
                        store.rejectChanges();
                    }
                });
            }
        });
    },

    toast: function(msg){
        Ext.toast({
            html: msg,
            colasable: false,
            align: 'b',
            slideDuration: 300,
            maxWidth: 400
        })
    },

    onCancel: function(){
        var me = this;
        var vm = me.getViewModel();
        var store = vm.get('movies');
        store.rejectChanges();
        this.getView().destroy();
    },

});