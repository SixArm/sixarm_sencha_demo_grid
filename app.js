// See README.md

// Load everything
Ext.require(['*']);

Ext.onReady(function() {

    // Define the "team" model.

    Ext.define('Team', {

	// Inherit from Sencha's built in model.
        // This is akin to Rails ActiveModel.
        // The model can have fields, associations,
        // validations, business logic, and more.
        extend: 'Ext.data.Model',

	// Instance variables.
        fields: [
	    'name', 
	    'sport'
	]

    });

    // Define the data store for "teams".
    // A store is a collection of model instances.
    // A store can have hardcoded instances (as below),
    // or link to proxies for AJAX, JSON, REST, etc.

    var teamStore = new Ext.data.Store({

	// The store will contain "Teams" models.
	// This matches the Ext.define('Teams'...) above.
        model: 'Team',

	// Create some model instances using hardcoded data.
	// In a real application, we would likely use AJAX.
        data: [
            { name: 'Alpha Team',    sport: 'Tennis' },
            { name: 'Bravo Team',    sport: 'Skiing' },
            { name: 'Charlie Team',  sport: 'Hocky' },
            { name: 'Delta Team',    sport: 'Football' },
            { name: 'Echo Team',     sport: 'Baseball' },
        ],

	// Enable the store to sort on the two fields
        sorters: ['name', 'sport'],

    });

    // Simple grid to show the "team" list

    var grid = new Ext.grid.Panel({

	// Bind the grid to the team's store as defined above.
	store: teamStore,

	// The view columns:
	//   * text: the label that the user sees
	//   * dataIndex: the store's corresponding field name
	//   * field: what renderer to use to  display the column's data
	//   * flex: can the column get wider and narrower?
	columns: [{
	    text: 'Name',
	    dataIndex: 'name',
	    field: 'textfield',
	    flex: 1

	},{
	    text: 'Sport',
	    dataIndex: 'sport',
	    field: 'textfield'
	}],

	// Enable in-place editing
	selType: 'cellmodel',
	plugins: [
            Ext.create('Ext.grid.plugin.CellEditing', {
		clicksToEdit: 1
            })
	],
    });

    // Create the viewport to show the grid.
    // This will take care of stretching the grid too.

    Ext.create('Ext.Viewport', {
	items: [grid]
    });

});
