Ext.define('MYSSI.view.assetlist.AssetGrid' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.AssetGrid',
	id: 'assetGrid',
    iconCls: 'web-icon brick',
	title : 'Asset List',

	buttonTextMode: 'show',

	deleteButtonText: "Delete Asset",
    deleteButtonIcon: '',
    deleteButtonIconCls: 'web-icon brick_delete',

    addButtonText: "Add Asset",
    addButtonIcon: '',
    addButtonIconCls: 'web-icon brick_add',
    assetModelStore: null,
	
	initComponent: function() {

		this.deleteButton = Ext.create("Ext.button.Button", {
            text: (this.buttonTextMode !== "hide") ? this.deleteButtonText : '',
            tooltip: this.deleteButtonText,
            icon: this.deleteButtonIcon,
            iconCls: this.deleteButtonIconCls,
            handler: Ext.bind(function () {
                this.fireEvent("itemDelete");
            }, this),
            disabled: true
        });

        this.addButton = Ext.create("Ext.button.Button", {
            text: (this.buttonTextMode !== "hide") ? this.addButtonText : '',
            tooltip: this.addButtonText,
            icon: this.addButtonIcon,
            iconCls: this.addButtonIconCls,
            handler: Ext.bind(function () {
                this.fireEvent("itemAdd");
            }, this)
        });

        this.searchfield = Ext.create("MYSSI.view.widgets.form.SearchField", {
            store: this.store,
            width: 150
        })
		
		Ext.apply(this, {
			dockedItems: [{
				xtype: 'toolbar',
				enableOverflow: true,
				items: [
					this.addButton, 
					this.deleteButton, 
                    { xtype: 'tbfill' },
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
				header: 'Asset Name',
				flex:1,
				dataIndex: 'assetname'
			},{
				header: 'Asset Model',
				flex:1,
                dataIndex: 'type_name',
                /*renderer: function(value) {
                    var modelStor = Ext.create('MYSSI.store.AssetModels');
                    modelStor.load();
                    var rec = modelStor.getById(value);
                    return (rec) ? rec.get('model_name') : '&mdash; ' + modelStor.getTotalCount();
                }*/
			},{
				header: 'Serial Number',
				flex:1,
				dataIndex: 'serialnumber'
			},{
				header: 'Asset Function',
				flex:1,
				dataIndex: 'asset_function'
			}]
        });
		
		this.callParent(arguments);

		this.getSelectionModel().on("select", this._onItemSelect, this);
		this.getSelectionModel().on("deselect", this._onItemDeselect, this);
		this.getView().on("itemkeydown", this._onItemKeyPress, this);
		this.getView().on("celldblclick", this._onItemDblClick, this);
    },
    
    getModelStore: function() {
        this.assetModelStore = (this.assetModelStore == null) ? Ext.ClassManager.get('MYSSI.store.AssetModels') : this.assetModelStore;
        return this.assetModelStore
    },

	_updateDeleteButton: function ()
    {
        /* Right now, we support delete on a single record only */
        if (this.getSelectionModel().getCount() == 1) {
            this.deleteButton.enable();
        } else {
            this.deleteButton.disable();
        }
    },
    _onItemKeyPress: function (view, record, item, index, e)
    {
        if (e.getKey() == e.ENTER || e.getKey() == e.TAB) {
            this._onItemEdit(view, record);
        }
	},
	_onItemDblClick: function (view, td, cellIndex, record, tr, rowIndex, e, eOpts)
    {
        this._onItemEdit(view, record);
    },
    /**
     * Called when an item should be edited
     */
    _onItemEdit: function (view, record)
    {
        if (this.editItemAsObject) {
            this.fireEvent("itemEdit", record);
        } else {
            this.fireEvent("itemEdit", record.getId());
        }
    },
    /**
     * Called when an item was selected
     */
    _onItemSelect: function (selectionModel, record)
    {
        this._updateDeleteButton(selectionModel, record);
        this.fireEvent("itemSelect", record.getId());
    },
    /**
     * Called when an item was deselected
     */
    _onItemDeselect: function (selectionModel, record)
    {
        this._updateDeleteButton(selectionModel, record);
        this.fireEvent("itemDeselect", record.getId());
    }
});
