Ext.define('MYSSI.view.projectlist.projectvendor.VendorGrid' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.ProjectVendor',
	buttonTextMode: 'hide',

	initComponent: function() {
        this.searchfield = Ext.create("MYSSI.view.widgets.form.SearchField", {
            store: this.store,
            width: 150
        })
		
		Ext.apply(this, {
			dockedItems: [{
				xtype: 'toolbar',
				enableOverflow: true,
				items: [
					this.searchfield
				]
			},{
				xtype: 'pagingtoolbar',
				dock: 'bottom',
				store: this.store,
                displayInfo: true,
                displayMsg: '{0} - {1} of {2}'
			}],

			columns: [{
				header: 'ID',
				hidden:true,
				dataIndex: 'id',
				flex:0
			},{
				header: 'Vendor Name',
				flex:1,
				dataIndex: 'vendor_name'
			}]
        });
		
		this.callParent(arguments);

		this.getSelectionModel().on("select", this._onItemSelect, this);
		this.getSelectionModel().on("deselect", this._onItemDeselect, this);
	},

    /**
     * Called when an item was selected
     */
    _onItemSelect: function (selectionModel, record)
    {
        this.fireEvent("itemSelect", record.getId());
    },
    /**
     * Called when an item was deselected
     */
    _onItemDeselect: function (selectionModel, record)
    {
        this.fireEvent("itemDeselect", record.getId());
    }
});
