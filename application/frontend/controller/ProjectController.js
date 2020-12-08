Ext.define('MYSSI.controller.ProjectController', {
    extend:	'MYSSI.controller.MainTabEditorPropController',
    stores:	[
                'Projects',
                'ProjectStates',
                'Customers',
                'VendorProjects'
            ],

    models:	[
                'Project',
                'ProjectState',
                'Customer',
                'VendorProject'
            ],

    views: 	[
        'projectlist.ProjectSurface',
        'projectlist.ProjectGrid', 
        'projectlist.ProjectEditor',
        'projectlist.ProjectEditorTab',
        'projectlist.ProjectEditorProperties',
        'projectlist.projectvendor.ProjectVendorGrid',
    ],

    editorStoreName: 'Projects',
    editorModelName: 'Project',

    storeClass: 'MYSSI.store.Projects',
    modelClass: 'MYSSI.model.Project',

    navigationClassName: 'ProjectGrid',
    editorClassName: 'ProjectEditor',
    
    newItemText: "New Project",

    deleteMessage: "Do you really wish to delete the project ",
    deleteTitle: "Delete Project",
    
    titleProperty: 'projectname',

    editorIconCls: "fugue-icon report-paper",

    idParamName: 'project_id',

    refs: [{
		ref: 'projSurface',
		selector: 'ProjectSurface'
	}, {
		ref: 'navigation',
		selector: 'ProjectGrid'
	}, {
        ref: 'editorTabPanel',
		selector: 'ProjectEditorTab'
    }, {
        ref: 'propertiesTabPanel',
		selector: 'ProjectEditorProperties'
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
                buttonSearchClick: this.onNavSearchButtonClick
            },
            'ProjectEditorTab': {
                tabchange: this.onTabChange,
                close: this.onTabCloseTest
            },
            'ProjectEditorProperties': {
                afterrender: this.onAfterPropTabRender
            },
            'ProjectVendorGrid': {
                itemAdd: this.onAttachVendor,
            }
        });
    },

    onAttachVendor: function() {
        console.log('attach vendor');

    },

    createPropertiesEditorWindow: function(editclass, editstore, editmodel, titletemtext, record, isNew) {
        var editor = Ext.create(editclass, {
            store: editstore,
            title: titletemtext,
            model: editmodel,
            listeners: {
                editorClose: Ext.bind(function (m)
                {
                    this.getEditorWindow().close();
                }, this)
            },
            editAfterSave: false
        });

        editor.on("itemSaved", this.onItemSaved, this);
        (isNew) ? editor.newItem(record) : editor.editItem(record);

        var edWin = Ext.create('Ext.window.Window', {
            border: false,
            layout: 'fit',
            closable: true,
            minWidth: 350,
            resizable: false,
            modal: true,
            title: titletemtext,
            items: [ editor ] 
        });

        return edWin;
    },
});
