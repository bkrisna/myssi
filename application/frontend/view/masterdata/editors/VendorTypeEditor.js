Ext.define('MYSSI.view.masterdata.editors.VendorTypeEditor', {
    extend: 'MYSSI.view.widgets.editor.Editor',
    alias: 'widget.VendorTypeEditor',
    modelClassName: 'MYSSI.model.VendorType',

    items: [{
        xtype: 'textfield',
        name: 'type_name',
        fieldLabel: "Type Name",
        labelWidth: 70
    },{
        xtype: 'textarea',
        name: 'note',
        fieldLabel: "Note",
        labelWidth: 70
    }],
    saveText: "Save Type"
});
