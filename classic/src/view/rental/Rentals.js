Ext.define('MovieRental.view.rental.Rentals',{
    extend: 'Ext.grid.Panel',
    xtype: 'rentalList',

    tbar:[{
        xtype: 'button',
        text: 'New Rent',
        with: 130,
        handler: 'onAddForm'
    }],
    title: 'Rentals',

    viewModel: {
        type: 'rentalViewModel'
    },

    bind: {store: '{rentals}'},

    controller: 'rentalController',

    columns: [{
        dataIndex: 'Id',
        hidden: true
    },
    {
        text: 'Transaction Code',
        flex: 1,
        dataIndex: 'TransactionCode',
        bind: '{rentals.TransactionCode}'
    },
    {
        text: 'Rental Date',
        flex: 1,
        dataIndex: 'RentalDate',
        bind: '{rentals.RentalDate}',
        renderer: function(value, metaData, record) {
            var formattedDate = Ext.util.Format.date(value, 'm/d/Y');
            return formattedDate;
          }
    },
    {
        text: 'Customer Name',
        flex: 1,
        dataIndex: 'Customer',
        bind: '{rentals.Customer}'
    },
    {
        text: 'Actions',
        xtype:'actioncolumn',
        width: 'auto',
        items: [{
            xtype: 'button',
            iconCls: 'fa fa-eye',
            tooltip: 'View Rents',
            handler : 'onViewRents'
        },{
            iconCls:'fa fa-trash',
            tooltip: 'Delete',
            handler : 'onDeleteRent'
        }]
    }]
})