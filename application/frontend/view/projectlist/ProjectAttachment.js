Ext.define('MYSSI.view.projectlist.ProjectAttachment', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.ProjectAttachment',
    
    navigationClass: 'ProjectGrid',
    editorClass: 'ProjectEditorTab',
    titleProperty: '',
    
    initComponent: function() {
        Ext.apply(this, {
            id: 'project-surface',
            layout: 'border',
            padding: 5,
            border: false,
            items: [{
				xtype: this.navigationClass,
                region: 'west',
                width: 300,
                split: true,
                store: 'Projects',
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
});