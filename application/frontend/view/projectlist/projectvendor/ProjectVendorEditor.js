Ext.define('MYSSI.view.assetlist.AssetListEditor', {
    extend: 'MYSSI.view.widgets.editor.Editor',
    alias: 'widget.AssetListEditor',
    modelClassName: 'MYSSI.model.VendorProject',

    initComponent: function() {
        Ext.apply(this, {
            items: [{
                xtype: 'container',
                anchor: '100%',
                flex: 1,
                layout: 'fit',
                items: [{}],
            }, {
                xtype: 'container',
                anchor: '100%',
                layout: 'hbox',
                items: [{
                    xtype: 'datefield',
                    name: 'start_date',
                    labelWidth: 150,
                    anchor: '95%',
                    fieldLabel: "Project Start Date"
                }, {
                    xtype: 'datefield',
                    name: 'end_date',
                    anchor: '95%',
                    labelWidth: 150,
                    fieldLabel: "Project End Date"
                }, {
                    xtype: 'textarea',
                    anchor: '100%',
                    name: 'note',
                    labelWidth: 150,
                    fieldLabel: "Notes"
                }],
            }]
        });
        this.callParent(arguments);
    },
    
    saveText: "Save"
});
