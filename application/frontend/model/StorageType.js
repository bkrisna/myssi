Ext.define('MYSSI.model.StorageType', {
    extend: 'Ext.data.Model',

	fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'type_name',
        type: 'string'
    }],
    
    idProperty: 'id',
    titleProperty: 'type_name',

    proxy: {
        type: 'custProxy',
        api: {
            create: 'storagetypes/create', 
            read: 'storagetypes/read',
            update: 'storagetypes/update',
            destroy: 'storagetypes/destroy',
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