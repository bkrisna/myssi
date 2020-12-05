Ext.define('MYSSI.controller.MainTabEditorController', {
    extend:	'Ext.app.Controller',
    
    editorStoreName: '',
    editorModelName: '',

    storeClass: '',
    modelClass: '',

    navigationClassName: "",
	editorClassName: "",
    
    newItemText: "",

    deleteMessage: "",
    deleteTitle: "",

    titleProperty: "",

    editorIconCls: "",

    init: function() {
        this.callParent(arguments);
    },

    createEditor: function (title)
    {   
        var editor = Ext.widget(this.editorClassName, {
            store: this.editorStoreName,
            title: title,
            iconCls: this.editorIconCls,
            model: this.editorModelName,
            closable: true,
            titleProperty: this.titleProperty,
            listeners: {
                editorClose: Ext.bind(function (m)
                {
                    this.onEditorClosed(m);
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

    deleteRecord: function (r) {
        var editor = this.findEditor(r.getId());
        if (editor !== null) {
            this.getEditorTabPanel().remove(editor);
        }
        r.destroy();
        this.getNavigation().getSelectionModel().deselectAll();
        this.getNavigation().getStore().load();
    },

    onNavSearchButtonClick: function(val) {
        this.getNavigation().getStore().load({ params: { query: val } });
    },
    
    onNavClearButtonClick: function(e) {
        this.getNavigation().getStore().load();
    },

    onEditorClosed: function(m) {
        this.getEditorTabPanel().remove(m);
        this.getNavigation().getSelectionModel().deselectAll();
    },

    onItemSaved: function (record)
    {
        this.getNavigation().getStore().load();
    }
});
