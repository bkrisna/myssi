Ext.define('MYSSI.view.projectlist.ProjectSurface', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.ProjectSurface',
    
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
        title: 'Project Manager',
        closable: true,
        menuPath: [{text: "Edit"}]
    }
});