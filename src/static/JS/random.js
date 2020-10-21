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


function ImagePlacer(boxName) {
	
	var currentbox = document.getElementById(boxName);
	var imgName = currentbox.textContent;
	var spriteURL = './static/imgs/sprites/'+ boxName + 'Sprites/' + imgName + '.png';
	if (ImageExistance(spriteURL) == true) {
		var img = document.createElement('img');
		img.className = boxName + 'Sprite';
		img.id = imgName;
		img.src = spriteURL;
	}
	currentbox.appendChild(img);
}

ImagePlacer('char'); ImagePlacer('kart'); ImagePlacer('tire'); ImagePlacer('glider')
