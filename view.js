var view={
	name:"view",
populateBoard:function() {
	var board = document.getElementById('ticTacBoard').children[0].children;
	var row;
	var column;
	for(var i = 0; i < 3; i++) {
		row = board[i].children;
		for(var j = 0; j < 3; j++) {
			column = row[j];
			column.innerHTML = control.modeler.model.boardState[i][j];
		};
	};
},

play: function(box) {
	var row = box.parentElement.getAttribute("row");
	var column = box.getAttribute("column");
	if (control.modeler.model.boardState[row][column] == null) {
		if (control.modeler.model.nextPlayer) {
			control.modeler.model.boardState[row][column] = "x";
		} else {
			control.modeler.model.boardState[row][column] = "o";
		}
		control.modeler.model.nextPlayer = !control.modeler.model.nextPlayer;
		// did someone win?
		// if they did, change the state and redraw
		this.populateBoard();
	} else {
		alert("grow up. you can't do that");
	}
}

}