var handler={
	name:"handler",

buildBoard:function() {
	var board = document.getElementById('ticTacBoard');
	var row;
	var cell;
	for(var i = 0; i < 3; i++) {
        row = board.insertRow(i);
		row.setAttribute('row', i);
		for(var j = 0; j < 3; j++) {
			cell = row.insertCell(j); 
			// why not set it to null directly?
			// because what if you want to finish a saved game?
			cell.innerHTML = control.modeler.model.boardState[i][j];//wrong
			cell.setAttribute('column', j);// should go to the handler
			cell.setAttribute('onclick', 'control.viewer.view.play(this)');// should go to the handler
		}
	}
}

 }
