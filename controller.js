var control = {
	viewer: {},
	modeler: {},

	getView: function() {
		this.viewer[view.name] = view;
	},

	getModel: function() {
		this.modeler[model.name] = model;

	},


	play: function(box) { 
	var row = box.parentElement.getAttribute("row");
	var column = box.getAttribute("column");
	if (this.modeler.model.boardState[row][column] == null) {
		if (this.modeler.model.nextPlayer) {
			this.modeler.model.boardState[row][column] = "x";
		} else {
			this.modeler.model.boardState[row][column] = "o";
		}
		this.modeler.model.nextPlayer = !this.modeler.model.nextPlayer;
		// did someone win?
		// if they did, change the state and redraw
		this.viewer.view.populateBoard(row,column);
	} else {
		alert("grow up. you can't do that");
	}
}



	

};
