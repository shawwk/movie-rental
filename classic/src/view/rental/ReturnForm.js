Ext.define('MovieRental.view.rental.ReturnForm', {
    extend: 'Ext.window.Window',

    floating: true,
    modal: true,
    width: 645,
    height: 600,
    bodyPadding: 20,

    title: 'Return Movies',

    controller: 'rentalController',

    viewModel: {
        type:'rentalViewModel'
    },

    items:[{
            xtype: 'form',
            layout: 'vbox',
            height: 100,
            items: [{
                xtype: 'datefield',
                fieldLabel: 'Rent Date:',
                format: 'd-M-Y',
                bind: {
                    value: '{selectedRent.RentalDate}'
                },
                readOnly: true
            },
            // {
            //     xtype: 'textfield',
            //     fieldLabel: 'Transaction Code: ',
            //     bind: '{selectedRent.Customer}',
            //     readOnly: true
            // },
            {
                xtype: 'textfield',
                fieldLabel: 'Customer Name:',
                bind: '{selectedRent.Customer}',
                readOnly: true
            }]
        },
        {
            xtype: 'grid',
            height: 600,
            width: 610,
            bind: {
                store: '{rentedMovies}'
            },
            header: {
                title: 'Rented Movies',
                titlePosition: 0,
                height: 40
            },
            columns:[{
                text: 'Title',
                dataIndex: 'Id',
                hidden: true

            },
            {
                text: 'Title',
                dataIndex: 'Title'
            },
            {
                text:'Genre',
                dataIndex: 'Genre'
            },
            {
                text: 'Director',
                dataIndex: 'Director'
            },
            {
                text: 'Return',
                dataIndex: 'IsReturned',
                renderer: function( value, metadata, record ){
                    if(value){
                        return '✔';
                    } else {
                        return '✖'
                    }
                }
            },
            {
                text: 'Return Date',
                width: 180,
                dataIndex: 'ReturnDate'
            }],
            selModel: {
                type: 'checkboxmodel',
                listeners: {
                    beforeselect: 'onSelectReturnedMovie'
                }
            },
        }],
        buttons:[{
            text: 'Return',
            handler: 'onReturnMovies'
        },
        {
            text: 'Cancel',
            handler: 'onCancel'
        }]  
});