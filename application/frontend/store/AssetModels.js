Ext.define('MYSSI.store.AssetModels', {
    extend: 'Ext.data.Store',
    model: 'MYSSI.model.AssetModel',
    autoLoad: true,
	remoteFilter: true
});
