Ext.define('MYSSI.view.assetlist.AssetSurface', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.AssetSurface',
    
    initComponent: function() {
        Ext.apply(this, {
            id: 'assetSurface',
            layout: 'border',
            border: false,
            padding: 5,
            
            items: [{
                xtype: 'asset-category-tree',
                region: 'west',
                floatable: false,
                split: true,
                width: 250,
                title: "Categories",
                collapsible: true,
            }, {
				xtype: 'AssetGrid',
                region: 'center',
                store: 'AssetLists'
			}, {
                xtype: 'tabpanel',
                title: "Part Details",
                width: 300,
                collapsed: true,
                collapsible: true,
                region: 'east',
                floatable: false,
                titleCollapse: true,
                split: true,
                animCollapse: false,
                items: [{
                    xtype: 'asset-info-grid',
                    title: "Asset Details"
                }]
            }]
        });

        this.callParent(arguments);
    },

    statics: {
        iconCls: 'web-icon brick',
        title: 'Asset Manager',
        closable: true,
        menuPath: [{text: "Edit"}]
    }
});