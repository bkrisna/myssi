Ext.define('MYSSI.view.projectlist.ProjectSurface', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.ProjectSurface',
    
    navigationClass: 'ProjectGrid',
    editorClass: 'ProjectEditorTab',
    propertiesClass: 'ProjectEditorProperties',
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
                region: 'center',
                layout: 'border',
                border: false,
                items: [{
                    xtype: this.editorClass,
                    region: "center",
                    minHeight: 250,
                    split: true,
                    layout: 'fit',
                    plugins: Ext.create('Ext.ux.TabCloseMenu')
                }, {
                    xtype: this.propertiesClass,
                    region: "south",
                    minHeight: 250,
                    split: true,
                    layout: 'fit',
                }]
            }]
        });

        this.callParent(arguments);
    },

    statics: {
        iconCls: 'fugue-icon report',
        title: 'Project Manager',
        closable: true,
        menuPath: [{text: "Edit"}]
    }
});