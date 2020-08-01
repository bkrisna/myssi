Ext.define('MYSSI.view.masterdata.editors.DacenStateEditor', {
    extend: 'MYSSI.view.widgets.editor.Editor',
    alias: 'widget.DacenStateEditor',
    modelClassName: 'MYSSI.model.DatacenterState',

    items: [{
            xtype: 'textfield',
            name: 'state_name',
            fieldLabel: "State Name",
            labelWidth: 70
        }
    ],
    saveText: "Save State"
});
