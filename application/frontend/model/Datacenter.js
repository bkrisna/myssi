Ext.define('MYSSI.model.Datacenter', {
    extend: 'Ext.data.Model',

	fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'dcname',
        type: 'string'
    }, {
        name: 'dcaddress',
        type: 'string'
    }, {
        name: 'dcstate',
        type: 'int'
    }],
    
    idProperty: 'id',
    titleProperty: 'dcname',

    proxy: {
        type: 'custProxy',
        api: {
            create: 'datacenters/create', 
            read: 'datacenters/read',
            update: 'datacenters/update',
            destroy: 'datacenters/destroy',
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