Ext.define('MYSSI.store.AssetTypes', {
    extend: 'Ext.data.Store',
    model: 'MYSSI.model.AssetType',
    autoLoad: true,
	remoteFilter: true
});
