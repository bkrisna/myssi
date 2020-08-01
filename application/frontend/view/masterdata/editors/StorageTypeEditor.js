Ext.define('MYSSI.view.masterdata.editors.StorageTypeEditor', {
    extend: 'MYSSI.view.widgets.editor.Editor',
    alias: 'widget.StorageTypeEditor',
    modelClassName: 'MYSSI.model.StorageType',

    items: [{
        xtype: 'textfield',
        name: 'type_name',
        fieldLabel: "Type Name",
        labelWidth: 70
    }],
    saveText: "Save Type"
});
