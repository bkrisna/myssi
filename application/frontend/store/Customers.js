Ext.define('MYSSI.store.Customers', {
    extend: 'Ext.data.Store',
    model: 'MYSSI.model.Customer',
    autoLoad: true,
	/*buffered: true,*/
	remoteFilter: true
});
