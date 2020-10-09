function p(obj) { console.log(obj) }

function ImageExistance(imgName) {
	var http = new XMLHttpRequest(); 

	if (imgName.length === 0) { 
		p("No img found…");
	} else { 
		http.open('HEAD', imgName, false); 
		http.send(); 
		if (http.status === 200) { 
			return true;
		} else { 
			p('Image doesn\'t exist');
			p(imgName);
			return false;
		} 
	} 
}


function ImagePlacer(boxName) {
	var currentbox = document.getElementById(boxName);
	var imgName = currentbox.textContent;
	var charSpriteURL = './static/imgs/sprites/charSprites/' + imgName + '.png';
	if (ImageExistance(charSpriteURL) == true && boxName == 'char') {
		// p('Can place image')
		var img = document.createElement('img');
		img.className = 'charSprite';
		img.id = imgName;
		img.src = charSpriteURL;
		// currentbox.textContent = '';
		currentbox.appendChild(img)

	}
}

ImagePlacer('char')

