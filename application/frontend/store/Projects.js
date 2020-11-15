Ext.define('MYSSI.store.Projects', {
    extend: 'Ext.data.Store',
    model: 'MYSSI.model.Project',
    autoLoad: true,
	remoteFilter: true
});
