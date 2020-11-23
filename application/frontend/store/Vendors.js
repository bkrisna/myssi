Ext.define('MYSSI.store.Vendors', {
    extend: 'Ext.data.Store',
    model: 'MYSSI.model.Vendor',
    autoLoad: true,
	remoteFilter: true
});
