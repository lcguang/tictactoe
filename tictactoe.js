(function(){
	var td = new Array();
	var curr_player = 0;
	var player_0 = new Set();
	var player_1 = new Set();
	var win = new Array();

	win.push([1, 2, 3]);
	win.push([4, 5, 6]);
	win.push([7, 8, 9]);
	win.push([1, 4, 7]);
	win.push([2, 5, 8]);
	win.push([3, 6, 9]);
	win.push([1, 5, 9]);
	win.push([3, 5, 7]);

	document.getElementById('restart').addEventListener('click', restart);
	for (var i = 1; i < 10; i++) {
		td.push(document.getElementById(i));
		document.getElementById(i).addEventListener('click', click);
	}

	function click(e) {
		if (e.target.innerHTML == 'X' || e.target.innerHTML == 'O') {
			return;
		}
		if (curr_player == 0) {
			e.target.innerHTML = 'X';
			e.target.style.fontFamily = "Arial"
			player_0.add(parseInt(e.target.id));
		} else {
			e.target.innerHTML = 'O';
			e.target.style.fontFamily = "Arial"
			player_1.add(parseInt(e.target.id));
		}
		curr_player = (curr_player) ? 0 : 1;
		if (checkWin(player_0)) {
			setTimeout(function() {
  				alert("X wins!");
  				restart();
  			}, 10)
		}
		if (checkWin(player_1)) {
			setTimeout(function() {
  				alert("O wins!");
  				restart();
  			}, 10)
		}
	}

	function restart() {
		for (var i = 0; i < 9; i++) {
			td[i].innerHTML = ' ';
		}
		player_0.clear();
		player_1.clear();
		curr_player = 0;
	}

	function checkWin(player) {
		if (player.size < 3) {
			return false;
		}
		for (var i = 0; i < win.length; i++) {
			var count = 0;
			for (var j = 0; j < win[i].length; j++) {
				if (player.has(win[i][j])) {
					count++;
				}
			}
			if (count == 3) {
				return true;
			}
		}
		return false;
	}

})();