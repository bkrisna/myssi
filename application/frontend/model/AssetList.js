Ext.define('MYSSI.model.AssetList', {
    extend: 'Ext.data.Model',

	fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'assetname',
        type: 'string'
    }, {
        name: 'serialnumber',
        type: 'string'
    }, {
        name: 'asset_function',
        type: 'string'
    }, {
        name: 'asset_type',
        type: 'int'
    }, {
        name: 'type_name',
        type: 'string'
    }, {
        name: 'is_engineered',
        type: 'bool'
    }, {
        name: 'is_virtualhost',
        type: 'bool'
    }, {
        name: 'asset_model_id',
        type: 'int'
    }, {
        name: 'asset_cpu_core',
        type: 'int'
    }, {
        name: 'asset_memory',
        type: 'int'
    }],
    
    idProperty: 'id',
    titleProperty: 'assetname',

    proxy: {
        type: 'custProxy',
        api: {
            create: 'assetlists/create', 
            read: 'assetlists/read',
            update: 'assetlists/update',
            destroy: 'assetlists/destroy',
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