Ext.define('MYSSI.model.Project', {
    extend: 'Ext.data.Model',

	fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'projectname',
        type: 'string'
    }, {
        name: 'iwo',
        type: 'string'
    }, {
        name: 'start_date',
        type: 'date'
    }, {
        name: 'end_date',
        type: 'date'
    }, {
        name: 'status',
        type: 'int'
    }],
    
    idProperty: 'id',
    titleProperty: 'projectname',

    proxy: {
        type: 'custProxy',
        api: {
            create: 'projects/create', 
            read: 'projects/read',
            update: 'projects/update',
            destroy: 'projects/destroy',
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