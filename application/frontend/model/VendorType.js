Ext.define('MYSSI.model.VendorType', {
    extend: 'Ext.data.Model',

	fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'type_name',
        type: 'string'
    }, {
        name: 'note',
        type: 'string'
    }],
    
    idProperty: 'id',
    titleProperty: 'type_name',

    proxy: {
        type: 'custProxy',
        api: {
            create: 'vendortypes/create', 
            read: 'vendortypes/read',
            update: 'vendortypes/update',
            destroy: 'vendortypes/destroy',
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