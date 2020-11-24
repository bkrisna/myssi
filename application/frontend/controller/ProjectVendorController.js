Ext.define('MYSSI.controller.AssetController', {
    extend:	'Ext.app.Controller',
    stores:	[
        'AssetLists',
        'AssetModels',
        'AssetTypes'
    ],

    models:	[
        'AssetList',
        'AssetModel',
        'AssetType'
    ],

    views: 	[
        'assetlist.AssetSurface',
        'assetlist.AssetGrid', 
        'assetlist.AssetInfoGrid',
        'assetlist.AssetCategoryTree',
        'assetlist.AssetListEditor',
    ],

    refs: [{
		ref         : 'assetGrid',
		selector    : 'AssetGrid'
	}],
    
    editorWindow: null,
    editAfterSave: false,

    titleProperty: 'assetname',

    storeClassName: 'AssetLists',
    modelClassName: 'AssetList',

    modelClass: 'MYSSI.model.AssetList',
    editorClass: 'MYSSI.view.assetlist.AssetListEditor',

    deleteMessage: "Do you really wish to delete asset : ",
    newTitle: 'Add new asset',
    editTitle: 'Edit asset',
    deleteTitle: 'Delete asset',


    init: function() {
        this.control({
            'AssetGrid': {
                itemAdd     : this.newRecord,
                itemDelete  : this.confirmDelete,
                itemEdit    : this.startEdit
            },
            'AssetGrid > toolbar > searchfield': {
                buttonSearchClick   : this.searchButtonClick,
				buttonClearClick    : this.clearButtonClick
            }
        });
    },

    getEditorWindow: function() {
        return this.editorWindow;
    },

    searchButtonClick: function(val, panelid) {
        this.getAssetListsStore().load({ params: { query: val } });
    },
    
    clearButtonClick: function(e, panelid) {
        this.getAssetListsStore().load();
    },

    createEditorWindow: function(titletemtext, record, isNew) {
        var editor = Ext.create(this.editorClass, {
            store: this.storeClassName,
            title: title,
            model: this.modelClassName,
            listeners: {
                editorClose: Ext.bind(function (m)
                {
                    this.getEditorWindow().close();
                }, this)
            },
            editAfterSave: this.editAfterSave
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

    startEdit: function (id) {
        var model = Ext.ClassManager.get(this.modelClass);

        model.load(id, {
            scope: this,
            success: function (record, operation)
            {
                this.editorWindow = this.createEditorWindow(this.editTitle, record, false);
                this.editorWindow.show();
            }
        });
    },

    onItemSaved: function (record)
    {
        //this.getDatacenterTypesStore().load();
        this.getAssetListsStore().load();
        if (!this.editAfterSave)  {
            this.getEditorWindow().close();
        }
    },

    newRecord: function (defaults)
    {
        Ext.apply(defaults, {});
        this.editorWindow = this.createEditorWindow(this.newTitle, defaults, true);
        this.editorWindow.show();
    },

    confirmDelete: function ()
    {
        var r = this.getAssetGrid().getSelectionModel().getLastSelected();
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

    deleteRecord: function (r)
    {
        r.destroy();
        this.getAssetListsStore().load();
    },

    test: function (test) {
        return null;
    }
});
