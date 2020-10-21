function ImageExistance(imgName) {
	var http = new XMLHttpRequest(); 

	if (imgName.length === 0) { 
		return null;
	} else { 
		http.open('HEAD', imgName, false); 
		http.send(); 
		if (http.status === 200) { 
			return true;
		} else { 
			return false;
		} 
	} 
}

function ImagePlacer(boxNumber, imgName) {

	// Image locations
	var spriteURL = null;
	var cName = null;
	if (imgName == 'unknown') { spriteURL = './static/imgs/sprites/charSprites/unknown.png' }
	else {
		if (boxNumber == 2) {
			var spriteURL = './static/imgs/sprites/charSprites/' + imgName + '.png';
			cName = 'char';
		} else if (boxNumber == 3 && imgName != '?') {
			var spriteURL = './static/imgs/sprites/kartSprites/' + imgName + '.png';
			cName = 'kart';
		} else if (boxNumber == 4 && imgName != '?') {
			var spriteURL = './static/imgs/sprites/tireSprites/' + imgName + '.png';
			cName = 'tire';
		} else if (boxNumber == 5 && imgName != '?') {
			var spriteURL = './static/imgs/sprites/gliderSprites/' + imgName + '.png';
			cName = 'glider';
		};
	}

	p(spriteURL);

	// Image check & creation
	if (ImageExistance(spriteURL) == true) {
		var img = document.createElement('img');
		img.id = imgName;
		img.className = cName;
		img.src = spriteURL;
		return [true, img];
	}
}


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
		for (i in arrItem) {
			if (i > 1) {
				var box = document.createElement('div');
				box.className = 'box';

				object = ImagePlacer(i, arrItem[i]);
				if (object[0] == true) {
					box.appendChild(object[1]);
				} else {
					var text = document.createTextNode('Error…');
					box.appendChild(text);
				}
				
				// Adds box to set item
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
