Ext.define('MYSSI.store.VendorTypes', {
    extend: 'Ext.data.Store',
    model: 'MYSSI.model.VendorType',
    autoLoad: true,
	remoteFilter: true
});
