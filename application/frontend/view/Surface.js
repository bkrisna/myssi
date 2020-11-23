Ext.define('MYSSI.view.Surface', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.Surface',
	
    initComponent: function() {
        Ext.apply(this, {
            id: 'surface',
            layout: 'border',
            border: false,
            bodyPadding: 3,
           
            items: [{
                id: 'title',
                xtype: 'box',
                region: 'north',
                height: 40,
                html: '<a href="https://github.com/richie87/codeigniter-meets-extjs/" target="_blank">MySSI Support Information </a>'
            },{
                xtype: 'tabpanel',
                region: 'center',
                items: [/*{
                    xtype: 'AssetSurface',
                    title: 'Asset Manager',
                    iconCls: 'web-icon brick',
                }, {
                    xtype: 'CustomerSurface',
                    title: 'Customer Manager',
                    iconCls: 'fugue-icon user-business'
                },*/ {
                    xtype: 'DacenSurface',
                    title: 'Datacenter Manager',
                    iconCls: 'web-icon building_key'
                }, {
                    xtype: 'ProjectSurface',
                    title: 'Project Manager',
                    iconCls: 'web-icon report_picture'
                }, {
                    xtype: 'VendorSurface',
                    title: 'Vendor Manager',
                    iconCls: 'web-icon report_picture'
                }, {
                    xtype: 'MasterDataSurface',
                    title: 'Master Data Manager',
                    iconCls: 'web-icon database_gear'
                }]
			}],
			
			dockedItems: [{
                xtype: 'toolbar',
                dock: 'bottom',
                items: [{
                    xtype: 'tbtext',
                    text: 'Logged in as ' + GlobalVars.userdata.user
                },'->', {
                    xtype: 'button',
                    text: 'Logout',
                    iconCls: 'fam door',
                    action: 'logout'
                }]
			}]
        });

        this.callParent(arguments);
    }
});