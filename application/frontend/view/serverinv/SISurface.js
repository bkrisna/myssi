Ext.define('MYSSI.view.serverinv.SISurface', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.si-surface',
    
    initComponent: function() {

        this.createStore({
            model: 'PartKeepr.PartBundle.Entity.Part',
            groupField: 'categoryPath',
            sorters: [
                {
                    property: 'category.categoryPath',
                    direction: 'ASC'
                },
                {
                    property: 'name',
                    direction: 'ASC'
                }
            ]
        });



        Ext.apply(this, {
            layout: 'border',
            border: true,
            bodyPadding: 0,
			
			title: 'Assets Inventory',
            
            items: [{
				xtype: 'exautils-tab',
				region: 'center'
			}]
        });

        this.callParent(arguments);
    }
});