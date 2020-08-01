Ext.define('MYSSI.view.customerlist.CustomerSurface', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.CustomerSurface',
    
    navigationClass: 'CustomerGrid',
    editorClass: 'CustomerEditorTab',
    titleProperty: '',
    
    initComponent: function() {
        Ext.apply(this, {
            id: 'customer-surface',
            layout: 'border',
            padding: 5,
            border: false,
            items: [{
				xtype: this.navigationClass,
                region: 'west',
                width: 300,
                split: true,
                store: 'Customers',
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
        title: 'Customer Manager',
        closable: true,
        menuPath: [{text: "Edit"}]
    }
});