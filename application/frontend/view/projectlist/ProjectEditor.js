Ext.define('MYSSI.view.projectlist.ProjectEditor', {
    extend: 'MYSSI.view.widgets.editor.Editor',
    alias: 'widget.ProjectEditor',
    modelClassName: 'MYSSI.model.Project',

    items: [{
            xtype: 'textfield',
            name: 'custname',
            fieldLabel: "Customer Name"
        }, {
            xtype: 'textfield',
            name: 'custalias',
            fieldLabel: "Customer Alias"
        }, {
            xtype: 'textarea',
            name: 'custaddr',
            fieldLabel: "Customer Address"
        }, {
            xtype: 'textfield',
            name: 'custweb',
            fieldLabel: "Customer Website"
        }, {
            xtype: 'textfield',
            name: 'custphone',
            fieldLabel: "Phone"
        }, {
            xtype: 'textfield',
            name: 'custfax',
            fieldLabel: "Fax"
        }, {
            xtype: 'textarea',
            name: 'note',
            fieldLabel: "Note"
        }
    ],
    saveText: "Save Project"
});
