Ext.define("MYSSI.view.assetlist.AssetInfoGrid", {
    extend: "Ext.grid.property.Grid",
    alias : 'widget.asset-info-grid',

    sortableColumns: false,

    fieldConfigs: {
        "category.name": {
            displayName: "Category Name"
        },
        stockLevel: {
            displayName: "Stock Level"
        },
        minStockLevel: {
            displayName: "Minimum Stock Level"
        },
        "footprint.name": {
            displayName: "Footprint"
        },
        "storageLocation.name": {
            displayName: "Storage Location"
        },
        comment: {
            displayName: "Comment"
        },
        createDate: {
            displayName: "Create Date",
            type: 'date'
        },
        status: {
            displayName: "Status"
        },
        partCondition: {
            displayName: "Condition"
        },
        needsReview: {
            displayName: "Needs Review",
            type: 'boolean'
        },
        internalPartNumber: {
            displayName: "Internal Part Number"
        },
        projectNames: {
            displayName: "Used in Projects"
        },
        "@id": {
            displayName: "Internal ID",
            renderer: function (value)
            {
                var values = value.split("/");
                var idstr = values[values.length - 1];
                var idint = parseInt(idstr);
                return idstr + " (#" + idint.toString(36) + ")";
            }
        }
    },

    shortFieldConfigs: {
        "name": {
            displayName: "Name"
        },
        "description": {
            displayName: "Description"
        },
        "category.name": {
            displayName: "Category Name"
        },
        stockLevel: {
            displayName: "Stock Level"
        },
        "footprint.name": {
            displayName: "Footprint"
        },
        "storageLocation.name": {
            displayName: "Storage Location"
        },
        comment: {
            displayName: "Comment"
        },
        internalPartNumber: {
            displayName: "Internal Part Number"
        }
    },

    listeners: {
        'beforeedit': function ()
        {
            return false;
        }
    },
    hideHeaders: true,
    nameColumnWidth: 150,
    cls: 'x-wrappable-grid',

    mode: 'full',

    initComponent: function ()
    {
        if (this.mode === "full") {
            this.sourceConfig = this.fieldConfigs;
        } else {
            this.sourceConfig = this.shortFieldConfigs;
        }

        this.callParent(arguments);
    },
    applyFromPart: function (record)
    {
        var values = {}, value;

        for (var i in this.sourceConfig) {
            value = record.get(i);
            if (value !== undefined) {
                values[i] = value;
            } else {
                values[i] = "none";
            }
        }

        this.setSource(values);
    }

});
