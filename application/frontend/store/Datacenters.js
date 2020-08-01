Ext.define('MYSSI.store.Datacenters', {
    extend: 'Ext.data.Store',
    model: 'MYSSI.model.Datacenter',
    autoLoad: true,
	/*buffered: true,*/
	remoteFilter: true
});
