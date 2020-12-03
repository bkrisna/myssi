Ext.define('MYSSI.store.VendorProjects', {
    extend: 'Ext.data.Store',
    model: 'MYSSI.model.VendorProject',
    autoLoad: true,
	remoteFilter: true
});
