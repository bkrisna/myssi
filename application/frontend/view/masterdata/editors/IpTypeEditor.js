Ext.define('MYSSI.view.masterdata.editors.IpTypeEditor', {
    extend: 'MYSSI.view.widgets.editor.Editor',
    alias: 'widget.IpTypeEditor',
    modelClassName: 'MYSSI.model.IpType',

    items: [{
        xtype: 'textfield',
        name: 'type_name',
        fieldLabel: "Type Name",
        labelWidth: 70
    }],
    saveText: "Save Type"
});
