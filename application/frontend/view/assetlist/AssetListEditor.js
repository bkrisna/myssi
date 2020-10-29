Ext.define('MYSSI.view.assetlist.AssetListEditor', {
    extend: 'MYSSI.view.widgets.editor.Editor',
    alias: 'widget.AssetListEditor',
    modelClassName: 'MYSSI.model.AssetList',

    items: [{
        xtype: 'textfield',
        fieldLabel: "Asset name",
        name: 'assetname',
        labelWidth: 100
    }, {
        xtype: 'textfield',
        fieldLabel: "Serial Number",
        name: 'serialnumber',
        labelWidth: 100
    }, {
        xtype: 'textfield',
        fieldLabel: "Function",
        name: 'asset_function',
        labelWidth: 100
    }, {
        xtype: 'combobox',
        name: 'asset_type',
        editable: false,
        fieldLabel: "Asset Type",
        store: 'AssetTypes',
        displayField: 'type_name',
        valueField: 'id',
        queryMode: 'remote',
        allowBlank: 'false',
        emptyText: '-- select asset type --',
        labelWidth: 100
    }, {
        xtype: 'checkbox',
        fieldLabel: "Is an Engineered ",
        name: 'is_engineered',
        labelWidth: 100
    }, {
        xtype: 'checkbox',
        fieldLabel: "Is virtual host",
        name: 'is_virtualhost',
        labelWidth: 100
    }, {
        xtype: 'combobox',
        name: 'asset_model_id',
        editable: false,
        fieldLabel: "Asset Model",
        store: 'AssetModels',
        displayField: 'model_name',
        valueField: 'id',
        queryMode: 'remote',
        allowBlank: 'false',
        emptyText: '-- select asset model --',
        labelWidth: 100
    }, {
        xtype: 'textfield',
        fieldLabel: "CPU Core Count",
        name: 'asset_cpu_core',
        labelWidth: 100
    }, {
        xtype: 'textfield',
        fieldLabel: "Memory Count",
        name: 'asset_memory',
        labelWidth: 100
    }],
    
    saveText: "Save"
});
