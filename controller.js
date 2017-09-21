var control = {
	viewer: {},
	modeler: {},

	getView: function() {
		this.viewer[view.name] = view;
	},

	getModel: function() {
		this.modeler[model.name] = model;
	}

};
