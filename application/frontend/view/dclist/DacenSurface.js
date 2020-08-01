Ext.define('MYSSI.view.dclist.DacenSurface', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.DacenSurface',
    
    navigationClass: 'DacenGrid',
    editorClass: 'DacenEditorTab',
    titleProperty: '',
    
    initComponent: function() {
        Ext.apply(this, {
            id: 'dacen-surface',
            layout: 'border',
            padding: 5,
            border: false,
            items: [{
				xtype: this.navigationClass,
                region: 'west',
                width: 300,
                split: true,
                store: 'Datacenters',
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
        iconCls: 'web-icon building_link',
        title: 'Datacenter Manager',
        closable: true,
        menuPath: [{text: "Edit"}]
    }
});