Ext.define('MYSSI.view.masterdata.MasterDataSurface', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.MasterDataSurface',
    
    initComponent: function() {
        Ext.apply(this, {
            id: 'masterdata-surface',
            border: true,
            padding: 5,
            items: [{
                title: 'Datacenter Types',
                iconCls: 'web-icon database_table',
                border: true,
                layout: 'fit',
				items: [{
					xtype: 'DacenTypeGrid',
                    border: true,
                    store: 'DatacenterTypes',
				}]
			}, {
                title: 'Datacenter State',
                iconCls: 'web-icon database_table',
                border: true,
                layout: 'fit',
				items: [{
					xtype: 'DacenStateGrid',
                    border: true,
                    store: 'DatacenterStates',
				}]
			}, {
                title: 'Vendor Type',
                iconCls: 'web-icon database_table',
                border: true,
                layout: 'fit',
				items: [{
					xtype: 'VendorTypeGrid',
                    border: true,
                    store: 'VendorTypes',
                }]
            }, {
                title: 'Asset Type',
                iconCls: 'web-icon database_table',
                border: true,
                layout: 'fit',
				items: [{
					xtype: 'AssetTypeGrid',
                    border: true,
                    store: 'AssetTypes',
                }]
            }, {
                title: 'Asset Model',
                iconCls: 'web-icon database_table',
                border: true,
                layout: 'fit',
				items: [{
					xtype: 'AssetModelGrid',
                    border: true,
                    store: 'AssetModels',
                }]
            }, {
                title: 'Storage Type',
                iconCls: 'web-icon database_table',
                border: true,
                layout: 'fit',
				items: [{
					xtype: 'StorageTypeGrid',
                    border: true,
                    store: 'StorageTypes',
                }]
            }, {
                title: 'Engineered System Type',
                iconCls: 'web-icon database_table',
                border: true,
                layout: 'fit',
				items: [{
					xtype: 'EngineeredTypeGrid',
                    border: true,
                    store: 'EngineeredTypes',
                }]
            }, {
                title: 'IP Address Type',
                iconCls: 'web-icon database_table',
                border: true,
                layout: 'fit',
				items: [{
					xtype: 'IpTypeGrid',
                    border: true,
                    store: 'IpTypes',
                }]
            }, {
                title: 'Credential Type',
                iconCls: 'web-icon database_table',
                border: true,
                layout: 'fit',
				items: [{
					xtype: 'CredentialTypeGrid',
                    border: true,
                    store: 'CredentialTypes',
                }]
            }]
        });
        this.callParent(arguments);
    },

    statics: {
        iconCls: 'web-icon lorry',
        title: 'Master Data Manager',
        closable: true,
        menuPath: [{text: "Edit"}]
    }
});