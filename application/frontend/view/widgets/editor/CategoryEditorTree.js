Ext.define("MYSSI.view.widgets.editor.CategoryEditorTree", {
    alias: 'widget.category-editor-tree',
    extend: 'MYSSI.view.widgets.categorytree.CategoryTree',
    
    hideHeaders: true,
    categoryModel: null,
    categoryService: null,
    categoryEditActions: true,

    initComponent: function ()
    {
        this.columns = [{
            xtype: 'treecolumn',
            header: 'Name',
            dataIndex: 'name',
            flex: 1
        }];

        this.createToolbar();
        this.callParent();
        this.on("selectionchange", Ext.bind(this.onItemSelect, this));
    },
    onItemSelect: function (selected) {
        if (selected.getCount() === 0) {
            this.toolbarAddButton.disable();
            this.toolbarDeleteButton.disable();
            this.toolbarEditButton.disable();
        }

        this.toolbarAddButton.enable();
        this.toolbarEditButton.enable();
        this.toolbarDeleteButton.enable();

        var record = selected.getSelection()[0];

    },
    createToolbar: function ()
    {
        this.toolbarExpandButton = Ext.create("Ext.button.Button", {
            iconCls: 'fugue-icon toggle-expand',
            tooltip: "Expand All",
            handler: this._onExpandClick,
            scope: this
        });

        this.toolbarCollapseButton = Ext.create("Ext.button.Button", {
            iconCls: 'fugue-icon toggle',
            tooltip: "Collapse All",
            handler: this._onCollapseClick,
            scope: this
        });

        this.toolbarReloadButton = Ext.create("Ext.button.Button", {
            iconCls: 'x-tbar-loading',
            tooltip: "Reload",
            handler: this._onReloadClick,
            scope: this
        });

        var actions = [
            this.toolbarExpandButton,
            this.toolbarCollapseButton,
            this.toolbarReloadButton
        ];

        this.toolbar = Ext.create("Ext.toolbar.Toolbar", {
            enableOverflow: true,
            dock: 'top',
            items: actions
        });

        Ext.apply(this, {
            dockedItems: [this.toolbar]
        });
    },
    _onReloadClick: function ()
    {
        this.store.load();
    },
    _onExpandClick: function ()
    {
        this.getRootNode().firstChild.expand(true);
    },
    _onCollapseClick: function ()
    {
        this.getRootNode().firstChild.collapse(true);
    },
    onUpdateRecord: function ()
    {
        this.store.load();
    }
});
