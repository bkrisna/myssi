Ext.define('MYSSI.view.projectlist.ProjectEditorProperties', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.ProjectEditorProperties',
    editor: null,

    
    initComponent: function() {
        Ext.apply(this, {
            /*layout: {
                type:'vbox',
                align:'stretch'
            },*/
            border: false,
            items: [{
                xtype: 'panel',
                /*layout: 'fit',*/
                border: false,
                items: [ this.editor ]
            },{
                xtype: 'tabpanel',
                border: false,
                plain: true,
                /*layout: 'fit',*/
                items: [{
                        xtype: 'ProjectVendorGrid',
                        title: 'Project Vendors',
                        store: 'VendorProjects',
                        border: false,
                        layout: 'fit'
                }]
			}],
        });

        this.callParent(arguments);
    },

    getEditor: function() {
        return this.editor;
    }

});