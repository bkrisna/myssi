Ext.define('MYSSI.view.projectlist.ProjectEditor', {
    extend: 'MYSSI.view.widgets.editor.Editor',
    alias: 'widget.ProjectEditor',
    modelClassName: 'MYSSI.model.Project',

    items: [{
        xtype: 'textfield',
        name: 'projectname',
        fieldLabel: "Project Name"
    }, {
        xtype: 'container',
        anchor: '100%',
        layout: 'hbox',
        items: [{
            xtype: 'container',
            flex: 1,
            layout: 'anchor',
            items: [{
                xtype: 'textfield',
                name: 'iwo',
                labelWidth: 150,
                anchor: '95%',
                fieldLabel: "Project IWO"
            }, {
                xtype: 'combobox',
                anchor: '95%',
                name: 'customer_id',
                editable: 'false',
                labelWidth: 150,
                fieldLabel: "End Customer",
                store: 'Customers',
                displayField: 'custname',
                valueField: 'id',
                queryMode: 'remote',
                allowBlank: 'false',
                emptyText: '-- select end customer --'
            }, {
                xtype: 'datefield',
                name: 'start_date',
                labelWidth: 150,
                anchor: '95%',
                fieldLabel: "Project Start Date"
            }, {
                xtype: 'datefield',
                name: 'end_date',
                anchor: '95%',
                labelWidth: 150,
                fieldLabel: "Project End Date"
            }]
        }, {
            xtype: 'container',
            flex: 1,
            layout: 'anchor',
            items: [{
                xtype: 'combobox',
                anchor: '100%',
                name: 'status',
                editable: 'false',
                labelWidth: 150,
                fieldLabel: "Project State",
                store: 'ProjectStates',
                displayField: 'state_name',
                valueField: 'id',
                queryMode: 'remote',
                allowBlank: 'false',
                emptyText: '-- select project state --'
            }, {
                xtype: 'textarea',
                anchor: '100%',
                name: 'note',
                labelWidth: 150,
                fieldLabel: "Project Notes"
            }]
        }]
    }],

    saveText: "Save Project"
});
