Ext.define('MYSSI.view.masterdata.editors.AssetTypeEditor', {
    extend: 'MYSSI.view.widgets.editor.Editor',
    alias: 'widget.AssetTypeEditor',
    modelClassName: 'MYSSI.model.AssetType',

    items: [{
        xtype: 'textfield',
        name: 'type_name',
        fieldLabel: "Type Name",
        labelWidth: 70
    },{
        xtype: 'textarea',
        name: 'desc',
        fieldLabel: "Note",
        labelWidth: 70
    }],
    saveText: "Save Type"
});
