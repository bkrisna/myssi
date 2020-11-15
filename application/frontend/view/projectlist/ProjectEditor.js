Ext.define('MYSSI.view.projectlist.ProjectEditor', {
    extend: 'MYSSI.view.widgets.editor.Editor',
    alias: 'widget.ProjectEditor',
    modelClassName: 'MYSSI.model.Project',

    items: [{
            xtype: 'textfield',
            name: 'projectname',
            fieldLabel: "Project Name"
        }, {
            xtype: 'textfield',
            name: 'iwo',
            fieldLabel: "Project IWO"
        }, {
            xtype: 'container',
            anchor: '100%',
            layout: 'hbox',
            items: [{
                xtype: 'container',
                flex: 1,
                layout: 'anchor',
                items: [{
                    xtype: 'datefield',
                    name: 'start_date',
                    labelWidth: 150,
                    fieldLabel: "Project Start Date"
                }]
            }, {
                xtype: 'container',
                flex: 1,
                layout: 'anchor',
                items: [{
                    xtype: 'datefield',
                    name: 'end_date',
                    labelWidth: 150,
                    fieldLabel: "Project End Date"
                }]
            }]
        }, {
            xtype: 'textfield',
            name: 'status',
            fieldLabel: "Project Status"
        }
    ],
    saveText: "Save Project"
});
