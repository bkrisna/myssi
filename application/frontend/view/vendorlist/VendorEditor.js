Ext.define('MYSSI.view.vendorlist.VendorEditor', {
    extend: 'MYSSI.view.widgets.editor.Editor',
    alias: 'widget.VendorEditor',
    modelClassName: 'MYSSI.model.Vendor',

    items: [{
            xtype: 'textfield',
            name: 'vendor_name',
            fieldLabel: "Vendor Name"
        }, {
            xtype: 'textfield',
            name: 'vendor_alias',
            fieldLabel: "Vendor Alias"
        }, {
            xtype: 'textfield',
            name: 'vendor_url',
            fieldLabel: "Vendor URL"
        }, {
            xtype: 'textarea',
            name: 'vendor_addr',
            fieldLabel: "Vendor Address"
        }, {
            xtype: 'textfield',
            name: 'vendor_pic_name',
            fieldLabel: "PIC Name"
        }, {
            xtype: 'textfield',
            name: 'vendor_pic_tel',
            fieldLabel: "PIC Phone"
        }, {
            xtype: 'textfield',
            name: 'vendor_pic_email',
            fieldLabel: "PIC Email"
        }
    ],
    saveText: "Save Vendor"
});
