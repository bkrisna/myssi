Ext.define('MYSSI.model.Customer', {
    extend: 'Ext.data.Model',

	fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'custname',
        type: 'string'
    }, {
        name: 'custalias',
        type: 'string'
    }, {
        name: 'custaddr',
        type: 'string'
    }, {
        name: 'custweb',
        type: 'string'
    }, {
        name: 'custphone',
        type: 'string'
    }, {
        name: 'custfax',
        type: 'string'
    }, {
        name: 'note',
        type: 'string'
    }],
    
    idProperty: 'id',
    titleProperty: 'custalias',

    proxy: {
        type: 'custProxy',
        api: {
            create: 'customers/create', 
            read: 'customers/read',
            update: 'customers/update',
            destroy: 'customers/destroy',
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