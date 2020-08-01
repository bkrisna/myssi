Ext.define('MYSSI.view.masterdata.editors.CredentialTypeEditor', {
    extend: 'MYSSI.view.widgets.editor.Editor',
    alias: 'widget.CredentialTypeEditor',
    modelClassName: 'MYSSI.model.CredentialType',

    items: [{
        xtype: 'textfield',
        name: 'type_name',
        fieldLabel: "Type Name",
        labelWidth: 70
    }],
    saveText: "Save Type"
});
