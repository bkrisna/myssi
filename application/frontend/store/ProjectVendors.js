Ext.define('MYSSI.store.ProjectVendors', {
    extend: 'Ext.data.Store',
    model: 'MYSSI.model.ProjectVendor',
    autoLoad: true,
	remoteFilter: true
});
