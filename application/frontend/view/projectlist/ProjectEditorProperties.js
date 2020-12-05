Ext.define('MYSSI.view.projectlist.ProjectEditorProperties', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.ProjectEditorProperties',
    editor: null,
    storeClassName: null,
    modelClassName: null,

    
    initComponent: function() {
        var editor = Ext.widget('ProjectEditor', {
            store: this.storeClassName,
            model: this.modelClassName,
            titleProperty: "",
            listeners: {
                editorClose: Ext.bind(function (m)
                {
                    this._onEditorClose();
                }, this)
            }
        });

        Ext.apply(this, {
            border: false,
            items: [{
                xtype: 'panel',
                border: false,
                items: [ this.editor ]
            }, {
                xtype: 'tabpanel',
                border: false,
                plain: true,
                layout: 'fit',
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
    },

    _onEditorClose: function(m) {
        this.fireEvent("editorClose", this);
    }

});