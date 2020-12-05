Ext.define('MYSSI.view.projectlist.ProjectEditorProperties', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.ProjectEditorProperties',
    
    items: [{
        xtype: 'ProjectVendorGrid',
        title: 'Project Vendors',
        store: 'VendorProjects',
        border: false,
        layout: 'fit'
    }]
});