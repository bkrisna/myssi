Ext.define('MYSSI.store.CredentialTypes', {
    extend: 'Ext.data.Store',
    model: 'MYSSI.model.CredentialType',
    autoLoad: true,
	remoteFilter: true
});
