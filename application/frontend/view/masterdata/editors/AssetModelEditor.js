Ext.define('MYSSI.view.masterdata.editors.AssetModelEditor', {
    extend: 'MYSSI.view.widgets.editor.Editor',
    alias: 'widget.AssetModelEditor',
    modelClassName: 'MYSSI.model.AssetModel',

    items: [{
        xtype: 'textfield',
        name: 'model_name',
        fieldLabel: "Type Name",
        labelWidth: 70
    }],
    
    saveText: "Save Type"
});
