Ext.define("MYSSI.view.assetlist.AssetCategoryTree", {
    extend: 'MYSSI.view.widgets.editor.CategoryEditorTree',
    alias: 'widget.asset-category-tree',

    //categoryModel: 'PartKeepr.PartBundle.Entity.PartCategory',
    rootVisible: false,

    initComponent: function ()
    {
        //this.store = Ext.create("PartKeepr.data.store.PartCategoryStore");

        this.callParent();

        this.syncButton = Ext.create("Ext.button.Button", {
            tooltip: "Reveal Category for selected part",
            iconCls: 'fugue-icon arrow-split-180',
            handler: Ext.bind(function ()
            {
                this.fireEvent("syncCategory");
            }, this),
            disabled: true
        });
        this.toolbar.add(['->', this.syncButton]);
    }
});
