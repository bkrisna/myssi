Ext.define('MYSSI.view.vendorlist.VendorSurface', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.VendorSurface',
    
    navigationClass: 'VendorGrid',
    editorClass: 'VendorEditorTab',
    titleProperty: '',
    
    initComponent: function() {
        Ext.apply(this, {
            id: 'vendor-surface',
            layout: 'border',
            padding: 5,
            border: false,
            items: [{
				xtype: this.navigationClass,
                region: 'west',
                width: 300,
                split: true,
                store: 'Vendors',
                titleProperty: this.titleProperty
            }, {
				xtype: this.editorClass,
                region: "center",
                layout: 'fit',
                plugins: Ext.create('Ext.ux.TabCloseMenu')
			}]
        });

        this.callParent(arguments);
    },

    statics: {
        iconCls: 'fugue-icon user-business',
        title: 'Vendor Manager',
        closable: true,
        menuPath: [{text: "Edit"}]
    }
});