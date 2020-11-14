Ext.define('MYSSI.store.ProjectStates', {
    extend: 'Ext.data.Store',
    model: 'MYSSI.model.ProjectState',
    autoLoad: true,
	remoteFilter: true
});
