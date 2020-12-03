Ext.define('MYSSI.model.VendorProject', {
    extend: 'Ext.data.Model',

	fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'project_id',
        type: 'int'
    }, {
        name: 'vendor_id',
        type: 'int'
    }, {
        name: 'start_date',
        type: 'date'
    }, {
        name: 'end_date',
        type: 'date'
    }, {
        name: 'note',
        type: 'string'
    }, {
        name: 'vendor_name',
        type: 'string'
    }, {
        name: 'vendor_alias',
        type: 'string'
    }, {
        name: 'vendor_type',
        type: 'int'
    }, {
        name: 'type_name',
        type: 'string'
    }, {
        name: 'projectname',
        type: 'string'
    }, {
        name: 'iwo',
        type: 'string'
    }, {
        name: 'status',
        type: 'string'
    }],
    
    idProperty: 'id',
    titleProperty: 'vendor_name',

    proxy: {
        type: 'custProxy',
        api: {
            create: 'vendorproject/create', 
            read: 'vendorproject/read',
            update: 'vendorproject/update',
            destroy: 'vendorproject/destroy',
        },
        reader: {
            type: 'json',
            root: 'items',
            totalProperty: 'total',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            encode: true,
            root: 'items'
        },
		simpleSortMode: true,
		filterParam: 'query',
		encodeFilters: function(filters) {
            return filters[0].value;
        }
    }
    
});