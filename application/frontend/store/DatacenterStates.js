Ext.define('MYSSI.store.DatacenterStates', {
    extend: 'Ext.data.Store',
    model: 'MYSSI.model.DatacenterState',
    autoLoad: true,
	remoteFilter: true
});
