Ext.define('MYSSI.model.AssetModel', {
    extend: 'Ext.data.Model',

	fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'model_name',
        type: 'string'
    }],
    
    idProperty: 'id',
    titleProperty: 'model_name',

    proxy: {
        type: 'custProxy',
        api: {
            create: 'assetmodels/create', 
            read: 'assetmodels/read',
            update: 'assetmodels/update',
            destroy: 'assetmodels/destroy',
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