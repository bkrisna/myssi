Ext.define('MYSSI.controller.MasterDataController', {
    extend:	'Ext.app.Controller',
    stores:	[
        'DatacenterTypes',
        'DatacenterStates',
        'VendorTypes',
        'AssetTypes',
        'AssetModels',
        'StorageTypes',
        'EngineeredTypes',
        'IpTypes',
        'CredentialTypes',
        'ProjectStates'
    ],

    models:	[
        'DatacenterType',
        'DatacenterState',
        'VendorType',
        'AssetType',
        'AssetModel',
        'StorageType',
        'EngineeredType',
        'IpType',
        'CredentialType',
        'ProjectState'
    ],

    views: 	[
        'masterdata.MasterDataSurface',
        'masterdata.editors.DacenTypeEditor', 
        'masterdata.editors.DacenStateEditor',
        'masterdata.editors.VendorTypeEditor',
        'masterdata.editors.AssetTypeEditor',
        'masterdata.editors.AssetModelEditor',
        'masterdata.editors.StorageTypeEditor',
        'masterdata.editors.EngineeredTypeEditor',
        'masterdata.editors.IpTypeEditor',
        'masterdata.editors.CredentialTypeEditor',
        'masterdata.editors.ProjectStateEditor',
        'masterdata.grids.DacenTypeGrid',
        'masterdata.grids.DacenStateGrid',
        'masterdata.grids.VendorTypeGrid',
        'masterdata.grids.AssetTypeGrid',
        'masterdata.grids.AssetModelGrid',
        'masterdata.grids.StorageTypeGrid',
        'masterdata.grids.EngineeredTypeGrid',
        'masterdata.grids.IpTypeGrid',
        'masterdata.grids.CredentialTypeGrid',
        'masterdata.grids.ProjectStateGrid'
    ],

    refs: [{
		ref         : 'masterDataSurface',
		selector    : 'MasterDataSurface'
	}, {
		ref         : 'dacenTypeGrid',
		selector    : 'DacenTypeGrid'
    }, {
		ref         : 'dacenStateGrid',
		selector    : 'DacenStateGrid'
    }, {
		ref         : 'vendorTypeGrid',
		selector    : 'VendorTypeGrid'
    }, {
		ref         : 'assetTypeGrid',
		selector    : 'AssetTypeGrid'
    }, {
		ref         : 'assetModelGrid',
		selector    : 'AssetModelGrid'
    }, {
		ref         : 'storageTypeGrid',
		selector    : 'StorageTypeGrid'
    }, {
		ref         : 'engineeredTypeGrid',
		selector    : 'EngineeredTypeGrid'
    }, {
		ref         : 'ipTypeGrid',
		selector    : 'IpTypeGrid'
    }, {
		ref         : 'credentialTypeGrid',
		selector    : 'CredentialTypeGrid'
    }, {
		ref         : 'projectStateGrid',
		selector    : 'ProjectStateGrid'
    }],
    
    editorWindow: null,
    editAfterSave: false,

    deleteMessage: "Do you really wish to delete : ",

    titleProperty: {
        'dacenTypeGrid'     : 'type_name',
        'dacenStateGrid'    : 'state_name',
        'vendorTypeGrid'    : 'type_name',
        'assetTypeGrid'     : 'type_name',
        'assetModelGrid'    : 'model_name',
        'storageTypeGrid'   : 'type_name',
        'engineeredTypeGrid': 'type_name',
        'ipTypeGrid'        : 'type_name',
        'credentialTypeGrid': 'type_name',
        'projectStateGrid'  : 'state_name'
    },

    storeClassName: {
        'dacenTypeGrid'     : 'DatacenterTypes',
        'dacenStateGrid'    : 'DatacenterStates',
        'vendorTypeGrid'    : 'VendorStates',
        'assetTypeGrid'     : 'AssetTypes',
        'assetModelGrid'    : 'AssetModels',
        'storageTypeGrid'   : 'StorageTypes',
        'engineeredTypeGrid': 'EngineeredTypes',
        'ipTypeGrid'        : 'IpTypes',
        'credentialTypeGrid': 'CredentialTypes',
        'dacenStateGrid'    : 'ProjectStates'
    },

    modelClassName: {
        'dacenTypeGrid'     : 'DatacenterType',
        'dacenStateGrid'    : 'DatacenterState',
        'vendorTypeGrid'    : 'VendorType',
        'assetTypeGrid'     : 'AssetType',
        'assetModelGrid'    : 'AssetModel',
        'storageTypeGrid'   : 'StorageType',
        'engineeredTypeGrid': 'EngieneeredType',
        'ipTypeGrid'        : 'IpType',
        'credentialTypeGrid': 'CredentialType',
        'dacenStateGrid'    : 'ProjectState'
    },

    modelClass: {
        'dacenTypeGrid'     : 'MYSSI.model.DatacenterType',
        'dacenStateGrid'    : 'MYSSI.model.DatacenterState',
        'vendorTypeGrid'    : 'MYSSI.model.VendorType',
        'assetTypeGrid'     : 'MYSSI.model.AssetType',
        'assetModelGrid'    : 'MYSSI.model.AssetModel',
        'storageTypeGrid'   : 'MYSSI.model.StorageType',
        'engineeredTypeGrid': 'MYSSI.model.EngieneeredType',
        'ipTypeGrid'        : 'MYSSI.model.IpType',
        'credentialTypeGrid': 'MYSSI.model.CredentialType'
    },

    newTitle: {
        'dacenTypeGrid'     : 'Add new datacenter type',
        'dacenStateGrid'    : 'Add new datacenter state',
        'vendorTypeGrid'    : 'Add new vendor type',
        'assetTypeGrid'     : 'Add new asset type',
        'assetModelGrid'    : 'Add new asset model',
        'storageTypeGrid'   : 'Add new storage type',
        'engineeredTypeGrid': 'Add new engineered system type',
        'ipTypeGrid'        : 'Add new IP Address type',
        'credentialTypeGrid': 'Add new credential type',
        'projectStateGrid'  : 'Add new project state'
    },

    editTitle: {
        'dacenTypeGrid'     : 'Edit datacenter type',
        'dacenStateGrid'    : 'Edit datacenter state',
        'vendorTypeGrid'    : 'Edit vendor type',
        'assetTypeGrid'     : 'Edit asset type',
        'assetModelGrid'    : 'Edit asset model',
        'storageTypeGrid'   : 'Edit storage type',
        'engineeredTypeGrid': 'Edit engineered system type',
        'ipTypeGrid'        : 'Edit IP Address type',
        'credentialTypeGrid': 'Edit credential type',
        'projectStateGrid'  : 'Edit project state'
    },

    deleteTitle: {
        'dacenTypeGrid'     : 'Delete datacenter type',
        'dacenStateGrid'    : 'Delete datacenter state',
        'vendorTypeGrid'    : 'Delete vendor type',
        'assetTypeGrid'     : 'Delete asset type',
        'assetModelGrid'    : 'Delete asset model',
        'storageTypeGrid'   : 'Delete storage type',
        'engineeredTypeGrid': 'Delete engineered system type',
        'ipTypeGrid'        : 'Delete IP Address type',
        'credentialTypeGrid': 'Delete credential type',
        'projectStateGrid'  : 'Delete project state'
    },

    editorClass: {
        'dacenTypeGrid'     : 'MYSSI.view.masterdata.editors.DacenTypeEditor',
        'dacenStateGrid'    : 'MYSSI.view.masterdata.editors.DacenStateEditor',
        'vendorTypeGrid'    : 'MYSSI.view.masterdata.editors.VendorTypeEditor',
        'assetTypeGrid'     : 'MYSSI.view.masterdata.editors.AssetTypeEditor',
        'assetModelGrid'    : 'MYSSI.view.masterdata.editors.AssetModelEditor',
        'storageTypeGrid'   : 'MYSSI.view.masterdata.editors.StorageTypeEditor',
        'engineeredTypeGrid': 'MYSSI.view.masterdata.editors.EngineeredTypeEditor',
        'ipTypeGrid'        : 'MYSSI.view.masterdata.editors.IpTypeEditor',
        'credentialTypeGrid': 'MYSSI.view.masterdata.editors.CredentialTypeEditor',
        'projectStateGrid'  : 'MYSSI.view.masterdata.editors.ProjectStateEditor'
    },

    init: function() {
        this.control({
            'DacenTypeGrid': {
                itemAdd     : this.newRecord,
                itemDelete  : this.confirmDelete,
                itemEdit    : this.startEdit
            },
            'DacenTypeGrid > toolbar > searchfield': {
                buttonSearchClick   : this.searchButtonClick,
				buttonClearClick    : this.clearButtonClick
            },
            'DacenStateGrid': {
                itemAdd     : this.newRecord,
                itemDelete  : this.confirmDelete,
                itemEdit    : this.startEdit
            },
            'DacenStateGrid > toolbar > searchfield': {
                buttonSearchClick   : this.searchButtonClick,
				buttonClearClick    : this.clearButtonClick
            },
            'VendorTypeGrid': {
                itemAdd     : this.newRecord,
                itemDelete  : this.confirmDelete,
                itemEdit    : this.startEdit
            },
            'VendorTypeGrid > toolbar > searchfield': {
                buttonSearchClick   : this.searchButtonClick,
				buttonClearClick    : this.clearButtonClick
            },
            'AssetTypeGrid': {
                itemAdd     : this.newRecord,
                itemDelete  : this.confirmDelete,
                itemEdit    : this.startEdit
            },
            'AssetTypeGrid > toolbar > searchfield': {
                buttonSearchClick   : this.searchButtonClick,
				buttonClearClick    : this.clearButtonClick
            },
            'AssetModelGrid': {
                itemAdd     : this.newRecord,
                itemDelete  : this.confirmDelete,
                itemEdit    : this.startEdit
            },
            'AssetModelGrid > toolbar > searchfield': {
                buttonSearchClick   : this.searchButtonClick,
				buttonClearClick    : this.clearButtonClick
            },
            'StorageTypeGrid': {
                itemAdd     : this.newRecord,
                itemDelete  : this.confirmDelete,
                itemEdit    : this.startEdit
            },
            'StorageTypeGrid > toolbar > searchfield': {
                buttonSearchClick   : this.searchButtonClick,
				buttonClearClick    : this.clearButtonClick
            },
            'EngineeredTypeGrid': {
                itemAdd     : this.newRecord,
                itemDelete  : this.confirmDelete,
                itemEdit    : this.startEdit
            },
            'EngineeredTypeGrid > toolbar > searchfield': {
                buttonSearchClick   : this.searchButtonClick,
				buttonClearClick    : this.clearButtonClick
            },
            'IpTypeGrid': {
                itemAdd     : this.newRecord,
                itemDelete  : this.confirmDelete,
                itemEdit    : this.startEdit
            },
            'IpTypeGrid > toolbar > searchfield': {
                buttonSearchClick   : this.searchButtonClick,
				buttonClearClick    : this.clearButtonClick
            },
            'CredentialTypeGrid': {
                itemAdd     : this.newRecord,
                itemDelete  : this.confirmDelete,
                itemEdit    : this.startEdit
            },
            'CredentialTypeGrid > toolbar > searchfield': {
                buttonSearchClick   : this.searchButtonClick,
				buttonClearClick    : this.clearButtonClick
            },
            'ProjectStateGrid': {
                itemAdd     : this.newRecord,
                itemDelete  : this.confirmDelete,
                itemEdit    : this.startEdit
            },
            'ProjectStateGrid > toolbar > searchfield': {
                buttonSearchClick   : this.searchButtonClick,
				buttonClearClick    : this.clearButtonClick
            },
        });
    },

    getEditorWindow: function() {
        return this.editorWindow;
    },

    getGridView: function(panelid) {
        switch(panelid) {
            case 'dacenTypeGrid':
                return this.getDacenTypeGrid();
                break;
            case 'dacenStateGrid':
                return this.getDacenStateGrid();
                break;
            case 'vendorTypeGrid':
                return this.getVendorTypeGrid();
                break;
            case 'assetTypeGrid':
                return this.getAssetTypeGrid();
                break;
            case 'assetModelGrid':
                return this.getAssetModelGrid();
                break;
            case 'storageTypeGrid':
                return this.getStorageTypeGrid();
                break;
            case 'engineeredTypeGrid':
                return this.getEngineeredTypeGrid();
                break;
            case 'ipTypeGrid':
                return this.getIpTypeGrid();
                break;
            case 'projectStateGrid':
                return this.getProjectStateGrid();
                break;
            default:
                return null;
          }
    },

    getDataStore: function(panelid) {
        switch(panelid) {
            case 'dacenTypeGrid':
                return this.getDatacenterTypesStore();
                break;
            case 'dacenStateGrid':
                return this.getDatacenterStatesStore();
                break;
            case 'vendorTypeGrid':
                return this.getVendorTypesStore();
                break;
            case 'assetTypeGrid':
                return this.getAssetTypesStore();
                break;
            case 'assetModelGrid':
                return this.getAssetModelsStore();
                break;
            case 'storageTypeGrid':
                return this.getStorageTypesStore();
                break;
            case 'engineeredTypeGrid':
                return this.getEngineeredTypesStore();
                break;
            case 'ipTypeGrid':
                return this.getIpTypesStore();
                break;
            case 'credentialTypeGrid':
                return this.getCredentialTypesStore();
                break;
            case 'credentialTypeGrid':
                return this.getCredentialTypesStore();
                break;
            case 'projectStateGrid':
                return this.getProjectStatesStore();
                break;
            default:
                return null;
          }
    },

    searchButtonClick: function(val, panelid) {
        this.getDataStore(panelid).load({ params: { query: val } });
    },
    
    clearButtonClick: function(e, panelid) {
        this.getDataStore(panelid).load();
    },

    createEditorWindow: function(titletemtext, record, isNew, panelid) {
        var editor = Ext.create(this.editorClass[panelid], {
            store: this.storeClassName[panelid],
            title: title,
            model: this.modelClassName[panelid],
            panelid: panelid,
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

    startEdit: function (id, panelid) {
        var model = Ext.ClassManager.get(this.modelClass[panelid]);

        model.load(id, {
            scope: this,
            success: function (record, operation)
            {
                this.editorWindow = this.createEditorWindow(this.editTitle[panelid], record, false, panelid);
                this.editorWindow.show();
            }
        });
    },

    onItemSaved: function (record, panelid)
    {
        //this.getDatacenterTypesStore().load();
        this.getDataStore(panelid).load();
        if (!this.editAfterSave)  {
            this.getEditorWindow().close();
        }
    },

    newRecord: function (defaults, panelid)
    {
        Ext.apply(defaults, {});
        this.editorWindow = this.createEditorWindow(this.newTitle[panelid], defaults, true, panelid);
        this.editorWindow.show();
    },

    confirmDelete: function (panelid)
    {
        var r = this.getGridView(panelid).getSelectionModel().getLastSelected();
        var recordName;
        var msg;

        recordName = r.get(this.titleProperty[panelid]);
        msg = this.deleteMessage + '"' + recordName + '" ?';

        Ext.Msg.confirm(
            this.deleteTitle[panelid],
            msg,
            function (but)
            {
                if (but == "yes") {
                    this.deleteRecord(r, panelid);
                }
            }, this);
    },

    deleteRecord: function (r, panelid)
    {
        r.destroy();
        this.getDataStore(panelid).load();
    }
});
