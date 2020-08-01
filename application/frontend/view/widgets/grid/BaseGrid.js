Ext.define('MYSSI.view.widgets.grid.BaseGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.BaseGrid',
    renderers: [],
    defaultColumnConfiguration: '',

    /**
     * Initializes the component
     */
    initComponent: function ()
    {
        this.defaultColumnConfiguration = this.columns;
        this.callParent();
    },
    getDefaultColumnConfiguration: function () {
        return this.defaultColumnConfiguration;
    }
});
