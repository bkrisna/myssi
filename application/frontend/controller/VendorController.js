Ext.define('MYSSI.controller.VendorController', {
    extend:	'Ext.app.Controller',
    stores:	['Vendors'],
    models:	['Vendor'],
    views: 	[
        'vendorlist.VendorSurface',
        'vendorlist.VendorGrid', 
        'vendorlist.VendorEditor',
        'vendorlist.VendorEditorTab',
    ],

    storeClassName: 'Vendors',
    modelClassName: 'Vendor',

    storeClass: 'MYSSI.store.Vendors',
    modelClass: 'MYSSI.model.Vendor',

    navigationClass: 'VendorGrid',
	editorClass: 'VendorEditor',
	newItemText: "New Vendor",

    deleteMessage: "Do you really wish to delete the vendors with name: ",
    deleteTitle: "Delete Vendor",

    /**
     * @var {string} The record field to read the title property from
     */
    titleProperty: 'vendor_name',

    refs: [{
		ref: 'surface',
		selector: 'VendorSurface'
	}, {
		ref: 'navigation',
		selector: 'VendorGrid'
	}, {
		ref: 'editorPanel',
		selector: 'VendorEditor'
	}, {
        ref: 'editorTabPanel',
		selector: 'VendorEditorTab'
    }],

    init: function() {
        this.control({
            'navigation': {
                itemAdd: this.newRecord,
                itemDelete: this.confirmDelete,
                itemEdit: this.startEdit,
                itemSelect: this.startEdit
            },
            'navigation > toolbar > searchfield': {
                buttonSearchClick: this.searchButtonClick,
				buttonClearClick: this.clearButtonClick
            },
        });
    },

    getLocalStore: function() {
        return this.getVendorsStore();
    },

    searchButtonClick: function(val) {
        this.getLocalStore().load({ params: { query: val } });
    },
    
    clearButtonClick: function(e) {
        this.getLocalStore().load();
    },

    createEditor: function (title)
    {
        var editor = Ext.widget('VendorEditor', {
            store: this.storeClassName,
            title: title,
            iconCls: 'fugue-icon user-business',
            model: this.modelClassName,
            closable: true,
            titleProperty: this.titleProperty,
            listeners: {
                editorClose: Ext.bind(function (m)
                {
                    this.getEditorTabPanel().remove(m);
                }, this)
            }
        });

        editor.on("itemSaved", this.onItemSaved, this);
        return editor;
    },

    findEditor: function (id) {
        for (var i = 0; i < this.getEditorTabPanel().items.getCount(); i++) {
            if (this.getEditorTabPanel().items.getAt(i).getRecordId() == id) {
                return this.getEditorTabPanel().items.getAt(i);
            }
        }

        return null;
    },

    startEdit: function (id) {
        //Ext.Msg.alert('test', id);
        var editor = this.findEditor(id);

        if (editor !== null) {
            editor.show();
            return;
        }

        // Still here? OK, we don't have an editor open. Create a new one
        var model = Ext.ClassManager.get(this.modelClass);

        model.load(id, {
            scope: this,
            success: function (record, operation)
            {
                editor = this.createEditor(record.get(this.titleProperty));
                editor.editItem(record);
                this.getEditorTabPanel().add(editor).show();
            }
        });
    },

    onItemSaved: function (record)
    {
        this.getLocalStore().load();
    },

    newRecord: function (defaults)
    {
        Ext.apply(defaults, {});
        var editor = this.createEditor(this.newItemText);
        editor.newItem(defaults);
        this.getEditorTabPanel().add(editor).show();
    },

    confirmDelete: function ()
    {
        var r = this.getNavigation().getSelectionModel().getLastSelected();
        var recordName;
        var msg;

        recordName = r.get(this.titleProperty);
        msg = this.deleteMessage + '"' + recordName + '" ?';

        Ext.Msg.confirm(
            this.deleteTitle,
            msg,
            function (but)
            {
                if (but == "yes") {
                    this.deleteRecord(r);
                }
            }, this);
    },

    deleteRecord: function (r)
    {
        var editor = this.findEditor(r.getId());

        if (editor !== null) {
            this.getEditorTabPanel().remove(editor);
        }

        r.destroy();
        this.getLocalStore().load();
    },
});
