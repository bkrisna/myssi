Ext.define('MYSSI.view.widgets.editor.EditorProperties', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.EditorProperties',
    editor: null,
    storeClassName: null,
    modelClassName: null,

    
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

    _onEditorClose: function(m) {
        this.fireEvent("editorClose", this);
    },
    
    _onItemSaved: function(rec) {
        this.fireEvent("itemSaved", rec);
    }

});