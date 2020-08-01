Ext.define('MYSSI.controller.DacenController', {
    extend:	'Ext.app.Controller',
    stores:	[
        'Datacenters',
        'DatacenterStates'
    ],
    models:	[
        'Datacenter',
        'DatacenterState'
    ],
    views: 	[
        'dclist.DacenSurface',
        'dclist.DacenGrid', 
        'dclist.DacenEditor',
        'dclist.DacenEditorTab',
    ],

    storeClassName: 'Datacenters',
    modelClassName: 'Datacenter',

    storeClass: 'MYSSI.store.Datacenters',
    modelClass: 'MYSSI.model.Datacenter',

    navigationClass: 'DacenGrid',
	editorClass: 'DacenEditor',

    deleteMessage: "Do you really wish to delete : ",
    deleteTitle: "Delete Datacenter",
    newItemText: "New Datacenter",

    /**
     * @var {string} The record field to read the title property from
     */
    titleProperty: 'dcname',

    refs: [{
		ref: 'dcSurface',
		selector: 'DacenSurface'
	}, {
		ref: 'navigation',
		selector: 'DacenGrid'
	}, {
		ref: 'editorPanel',
		selector: 'DacenEditor'
	}, {
        ref: 'editorTabPanel',
		selector: 'DacenEditorTab'
    }],

    init: function() {
        this.control({
            'DacenGrid': {
                itemAdd: this.newRecord,
                itemDelete: this.confirmDelete,
                itemEdit: this.startEdit,
                itemSelect: this.startEdit
            },
            'DacenGrid > toolbar > searchfield': {
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
        var editor = Ext.widget(this.editorClass, {
            store: this.storeClass,
            title: title,
            iconCls: 'web-icon building_link',
            model: this.modelClass,
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

    onItemSaved: function (record)  {
        this.getDatacentersStore().load();
    },

    newRecord: function (defaults) {
        Ext.apply(defaults, {});
        var editor = this.createEditor(this.newItemText);
        editor.newItem(defaults);
        this.getEditorTabPanel().add(editor).show();
    },

    confirmDelete: function () {
        var r = this.getNavigation().getSelectionModel().getLastSelected();
        var recordName = r.get(this.titleProperty);
        var msg = this.deleteMessage + '"' + recordName + '" ?';

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

    deleteRecord: function (r) {
        var editor = this.findEditor(r.getId());
        if (editor !== null) {
            this.getEditorTabPanel().remove(editor);
        }
        r.destroy();
        this.getDatacentersStore().load();
    },
});
