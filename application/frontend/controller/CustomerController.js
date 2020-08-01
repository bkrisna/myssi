Ext.define('MYSSI.controller.CustomerController', {
    extend:	'Ext.app.Controller',
    stores:	['Customers'],
    models:	['Customer'],
    views: 	[
        'customerlist.CustomerSurface',
        'customerlist.CustomerGrid', 
        'customerlist.CustomerEditor',
        'customerlist.CustomerEditorTab',
    ],

    storeClassName: 'Customers',
    modelClassName: 'Customer',

    storeClass: 'MYSSI.store.Customers',
    modelClass: 'MYSSI.model.Customer',

    navigationClass: 'CustomerGrid',
	editorClass: 'CustomerEditor',
	newItemText: "New Customer",

    deleteMessage: "Do you really wish to delete the customer ",
    deleteTitle: "Delete Customer",
    newItemText: "New Customer",

    /**
     * @var {string} The record field to read the title property from
     */
    titleProperty: 'custalias',

    refs: [{
		ref: 'custSurface',
		selector: 'CustomerSurface'
	}, {
		ref: 'navigation',
		selector: 'CustomerGrid'
	}, {
		ref: 'editorPanel',
		selector: 'CustomerEditor'
	}, {
        ref: 'editorTabPanel',
		selector: 'CustomerEditorTab'
    }],

    init: function() {
        this.control({
            'CustomerGrid': {
                itemAdd: this.newRecord,
                itemDelete: this.confirmDelete,
                itemEdit: this.startEdit,
                itemSelect: this.startEdit
            },
            'CustomerGrid > toolbar > searchfield': {
                buttonSearchClick: this.searchButtonClick,
				buttonClearClick: this.clearButtonClick
            },
        });
    },

    searchButtonClick: function(val) {
        this.getCustomersStore().load({ params: { query: val } });
    },
    
    clearButtonClick: function(e) {
        this.getCustomersStore().load();
    },

    createEditor: function (title)
    {
        var editor = Ext.widget('CustomerEditor', {
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
        this.getCustomersStore().load();
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
        this.getCustomersStore().load();
    },
});
