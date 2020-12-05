Ext.define('MYSSI.view.widgets.editor.EditorProperties', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.EditorProperties',
    editor: null,
    storeClassName: '',
    modelClassName: '',
    iconCls: '',
    titleProperty: '',
    editorClassName: '',

    
    initComponent: function() {
       this.callParent(arguments);
    },

    getEditor: function() {
        return this.editor;
    },

    newItem: function (record) {
        this.editor.newItem(record);
    },

    editItem: function (record) {
        this.editor.editItem(record);
    },

    getRecordId: function() {
        return this.editor.getRecordId();
    },

    getRecord: function() {
        return this.editor.getRecord();
    },

    _onEditorClose: function(m) {
        this.fireEvent("editorClose", this);
    },
    
    _onItemSaved: function(rec) {
        this.fireEvent("itemSaved", rec);
    }

});