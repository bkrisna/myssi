Ext.define('MYSSI.view.masterdata.editors.DacenTypeEditor', {
    extend: 'MYSSI.view.widgets.editor.Editor',
    alias: 'widget.DacenTypeEditor',
    modelClassName: 'MYSSI.model.DatacenterType',

    items: [{
            xtype: 'textfield',
            name: 'type_name',
            fieldLabel: "Type Name",
            labelWidth: 70
        }
    ],
    saveText: "Save Type"
});
