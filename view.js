var view = {
	name: "view",
	board: function() {
		return document.getElementById("ticTacBoard").children[0].children;
	},
	/**row: null,
	column: null,**/
	populateBoard: function(row,column) {
		for (var i = 0; i < 3; i++) {
			///// looop needs to go to the controller
			row = this.board()[i].children;
			for (var j = 0; j < 3; j++) {
				column = row[j];
				column.innerHTML = control.modeler.model.boardState[i][j];
			}
		}
	},

	buildBoard:function() {
	var board = document.getElementById('ticTacBoard');
	var row;
	var cell;
	for(var i = 0; i < 3; i++) {
        row = board.insertRow(i);
		row.setAttribute('row', i);
		for(var j = 0; j < 3; j++) {
			cell = row.insertCell(j); 
			cell.innerHTML = control.modeler.model.boardState[i][j];// fix this
			cell.setAttribute('column', j);
			cell.setAttribute('onclick', 'control.play(this)');
		}
	}
}
};
