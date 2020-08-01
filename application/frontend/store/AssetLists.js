Ext.define('MYSSI.store.AssetLists', {
    extend: 'Ext.data.Store',
    model: 'MYSSI.model.AssetList',
    autoLoad: true,
	remoteFilter: true
});
