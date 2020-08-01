Ext.define('MYSSI.model.DatacenterState', {
    extend: 'Ext.data.Model',

	fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'state_name',
        type: 'string'
    }],
    
    idProperty: 'id',
    titleProperty: 'state_name',

    proxy: {
        type: 'custProxy',
        api: {
            create: 'datacenterstates/create', 
            read: 'datacenterstates/read',
            update: 'datacenterstates/update',
            destroy: 'datacenterstates/destroy',
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