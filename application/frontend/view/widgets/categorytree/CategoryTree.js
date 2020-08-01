Ext.define("MYSSI.view.widgets.categorytree.CategoryTree", {
	alias: 'widget.category-tree',
	extend: 'Ext.tree.Panel',
	categoryModel: null,
    viewConfig: {
    	animate: false
    },
    loaded: false,
    rootVisible: false
});
