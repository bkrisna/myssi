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
                fieldLabel: "Project IWO"
            }, {
                xtype: 'datefield',
                name: 'customer',
                labelWidth: 150,
                fieldLabel: "Custiner"
            }, {
                xtype: 'datefield',
                name: 'start_date',
                labelWidth: 150,
                fieldLabel: "Project Start Date"
            }, {
                xtype: 'datefield',
                name: 'end_date',
                labelWidth: 150,
                fieldLabel: "Project End Date"
            }]
        }, {
            xtype: 'container',
            flex: 1,
            layout: 'anchor',
            items: [{
                xtype: 'combobox',
                name: 'status',
                editable: 'false',
                labelWidth: 150,
                fieldLabel: "Project State",
                store: 'ProjectStates',
                displayField: 'state_name',
                valueField: 'id',
                queryMode: 'remote',
                allowBlank: 'false',
                emptyText: '-- select state --'
            }, {
                xtype: 'textarea',
                name: 'note',
                labelWidth: 150,
                fieldLabel: "Project Notes"
            }]
        }]
    }],

    saveText: "Save Project"
});
