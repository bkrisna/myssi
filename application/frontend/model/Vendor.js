Ext.define('MYSSI.model.Vendor', {
    extend: 'Ext.data.Model',

	fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'vendor_name',
        type: 'string'
    }, {
        name: 'vendor_url',
        type: 'string'
    }, {
        name: 'vendor_addr',
        type: 'string'
    }, {
        name: 'vendor_alias',
        type: 'string'
    }, {
        name: 'vendor_pic_name',
        type: 'string'
    }, {
        name: 'vendor_pic_tel',
        type: 'string'
    }, {
        name: 'vendor_pic_email',
        type: 'string'
    }],
    
    idProperty: 'id',
    titleProperty: 'vendor_name',

    proxy: {
        type: 'custProxy',
        api: {
            create: 'vendors/create', 
            read: 'vendors/read',
            update: 'vendors/update',
            destroy: 'vendors/destroy',
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