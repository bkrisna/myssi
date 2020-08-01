Ext.define('MYSSI.view.masterdata.editors.EngineeredTypeEditor', {
    extend: 'MYSSI.view.widgets.editor.Editor',
    alias: 'widget.EngineeredTypeEditor',
    modelClassName: 'MYSSI.model.EngineeredType',

    items: [{
        xtype: 'textfield',
        name: 'type_name',
        fieldLabel: "Type Name",
        labelWidth: 70
    }],
    saveText: "Save Type"
});
