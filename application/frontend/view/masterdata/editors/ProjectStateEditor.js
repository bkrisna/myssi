Ext.define('MYSSI.view.masterdata.editors.ProjectStateEditor', {
    extend: 'MYSSI.view.widgets.editor.Editor',
    alias: 'widget.ProjectStateEditor',
    modelClassName: 'MYSSI.model.ProjectState',

    items: [{
            xtype: 'textfield',
            name: 'state_name',
            fieldLabel: "State Name",
            labelWidth: 70
        }
    ],
    saveText: "Save State"
});
