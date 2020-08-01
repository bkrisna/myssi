Ext.define('MYSSI.view.dclist.DacenEditor', {
    extend: 'MYSSI.view.widgets.editor.Editor',
    alias: 'widget.DacenEditor',
    modelClassName: 'MYSSI.model.Datacenter',

    items: [{
            xtype: 'textfield',
            name: 'dcname',
            fieldLabel: "Datacenter Name"
        }, {
            xtype: 'textarea',
            name: 'dcaddress',
            fieldLabel: "Datacenter Address"
        }, {
            xtype: 'combobox',
            name: 'dcstate',
            editable: 'false',
            fieldLabel: "Datacenter State",
            store: 'DatacenterStates',
            displayField: 'state_name',
            valueField: 'id',
            queryMode: 'remote',
            allowBlank: 'false',
            emptyText: '-- select state --'
        }
    ],
    saveText: "Save Datacenter"
});
