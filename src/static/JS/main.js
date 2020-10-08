function p(obj) { console.log(obj) }

function GenerateHTML(arrayObj) {
	var master_counter = 0;
	var count = 0;
	var hold = document.getElementById('hold');

	for (index in arrayObj) { // p(count);
		master_counter += 1;
		if (master_counter > 100) {
			break;
		}
		var arrItem = arrayObj[index];

		var setClass = arrItem[0];
		var set = document.createElement('div');
		set.className = 'set ' + setClass;

		var setTitle = document.createElement('span');
		setTitle.className = 'heading';
		setTitle.appendChild(document.createTextNode(arrItem[1]));
		set.appendChild(setTitle);
		// p(arrItem)
		for (i in arrItem) {
			if (i > 1) {
				// p(i);
				var box = document.createElement('div');
				box.className = 'box';
				// p(typeof arrItem[i]);
				if (arrItem[i] == '?') {
					var img = document.createElement('img');
					img.className = 'random';
					img.src = 'static/imgs/random.png';
					box.appendChild(img);
				} else {
					var text = document.createTextNode(arrItem[i]);
					box.appendChild(text);

				}
				set.appendChild(box);
			}
		} // Loop
		if (count == 0) {
			var row = document.createElement('div');
			row.className = 'row';
			row.appendChild(set);
			count += 1;
		} else if (count == 2) {
			row.appendChild(set);
			count = 0;
		} else {
			row.appendChild(set)
			count += 1;
		}
		hold.append(row);
	} // Loop
};

function Generate() {
	// Generate Array
	fetch('static/JS/sets.txt')
		// Read data in
	  .then(response => response.text())
	  .then(data => {
		var data = data.replace(/(\r\n|\n|\r)/gm, ";").split(';');
		var arr = [];
		for (i in data) {
			const set = data[i].split(', ')
			if (set.length > 1){
				arr.push(set)
			} // If
		}; // Loop
		GenerateHTML(arr);
	});
}

Generate();
