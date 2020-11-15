Ext.define('MYSSI.controller.ProjectController', {
    extend:	'Ext.app.Controller',
    stores:	[
                'Projects',
                'ProjectStates'
            ],

    models:	[
                'Project',
                'ProjectState'
            ],

    views: 	[
        'projectlist.ProjectSurface',
        'projectlist.ProjectGrid', 
        'projectlist.ProjectEditor',
        'projectlist.ProjectEditorTab',
    ],

    storeClassName: 'Projects',
    modelClassName: 'Project',

    storeClass: 'MYSSI.store.Projects',
    modelClass: 'MYSSI.model.Project',

    navigationClass: 'ProjectGrid',
	editorClass: 'ProjectEditor',
	newItemText: "New Project",

    deleteMessage: "Do you really wish to delete the project ",
    deleteTitle: "Delete Project",
    newItemText: "New Project",

    /**
     * @var {string} The record field to read the title property from
     */
    titleProperty: 'projectname',

    refs: [{
		ref: 'projSurface',
		selector: 'ProjectSurface'
	}, {
		ref: 'navigation',
		selector: 'ProjectGrid'
	}, {
		ref: 'editorPanel',
		selector: 'ProjectEditor'
	}, {
        ref: 'editorTabPanel',
		selector: 'ProjectEditorTab'
    }],

    init: function() {
        this.control({
            'ProjectGrid': {
                itemAdd: this.newRecord,
                itemDelete: this.confirmDelete,
                itemEdit: this.startEdit,
                itemSelect: this.startEdit
            },
            'ProjectGrid > toolbar > searchfield': {
                buttonSearchClick: this.searchButtonClick,
				buttonClearClick: this.clearButtonClick
            },
        });
    },

    searchButtonClick: function(val) {
        this.getProjectsStore().load({ params: { query: val } });
    },
    
    clearButtonClick: function(e) {
        this.getProjectsStore().load();
    },

    createEditor: function (title)
    {
        var editor = Ext.widget('ProjectEditor', {
            store: this.storeClassName,
            title: title,
            iconCls: 'fugue-icon report-paper',
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
        this.getProjectsStore().load();
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
        this.getProjectsStore().load();
    },
});
