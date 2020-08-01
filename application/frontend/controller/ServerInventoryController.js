Ext.define('MYSSI.controller.ServerInventoryController', {
    extend:	'Ext.app.Controller',
    //stores:	['ServerInventory'],
    //models:	['ServerInventory'],
    //views: 	['movie.Grid', 'movie.Window', 'movie.Form', 'movie.Surface'],

    /*refs: [{
		ref: 'movieGrid',
		selector: 'movie-grid'
	}],*/
	
    init: function() {
		/*this.contextmenu = Ext.create('Ext.menu.Menu', {
            id: 'movie-grid-ctx',
            items: [{
                text: 'Edit',
                action: 'update-movie',
                iconCls: 'fam book_edit'
            }, {
                text: 'Delete',
                action: 'delete-movie',
                iconCls: 'fam delete'
            }]
        });
		
        this.control({
			'movie-grid': {
				itemdblclick: this.addEditMovie,
				itemcontextmenu: this.listContextMenu
            },
            'movie-grid > toolbar > button[action=add]': {
            	click: this.addEditMovie
            },
			'menu[id=movie-grid-ctx] > menuitem': {
                click: this.listContextMenuItem
            },            
            'movie-window button[action=save]': {
                click: this.saveMovie
            }
        });*/
    }
});
