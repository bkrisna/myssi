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
                buttonSearchClick: this.onNavSearchButtonClick,
				buttonClearClick: this.onNavClearButtonClick
            },
            'ProjectEditorTab': {
                tabchange: this.onTabChange
            },
            'ProjectEditorProperties': {
                afterrender: this.onAfterPropTabRender
            }
        });
    }
});
