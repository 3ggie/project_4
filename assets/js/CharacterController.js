/////////////////////////////////////////////
// Keyboard Handlers                       //
/////////////////////////////////////////////
function checkKeyPressed(key) {
	key.preventDefault();
	if (key.keyCode == 65) {
		//console.log("A pressed");
        keyA = true;
    }
    if (key.keyCode == 68) {
		//console.log("D pressed");
		keyD = true;
    }
	if (key.keyCode == 87) {
		//console.log("W pressed");
		keyW = true;
	}
	if (key.keyCode == 83) {
		//console.log("S pressed");
		keyS = true;
	}
}

function checkKeyReleased(key) {
	if (key.keyCode == 68) {
		//console.log("D released");
        keyD = false;
    }
    if (key.keyCode == 65) {
		//console.log("A released");
		keyA = false;
    }
	if (key.keyCode == 87) {
		//console.log("W released");
		keyW = false;
	}
	if (key.keyCode == 83) {
		//console.log("S released");
		keyS = false;
	}
}

function mainCharacterController() {
	//console.log(mapContainer.position.x);
	//console.log(mapContainer.position.y);
	//console.log(tu.getIndex(mainCharacter.x, mainCharacter.y, 32, 32, mapWidth));
	//console.log("Position x " + mainCharacter.position.x);
	//console.log("Position y " + mainCharacter.position.y);
	//console.log("x Index " + tu.getIndex(mainCharacter.x, mainCharacter.y, 32, 32, 30)%10);
	//console.log("y Index " + Math.floor(tu.getIndex(mainCharacter.x, mainCharacter.y, 32, 32, 30)/mapWidth)/2);
	if ((mainCharacter.position.x - startX) % 32 == 0 && (mainCharacter.position.y - startY) % 32 == 0) {
		if (keyA && keyW && !keyD && !keyS) {
			var index = tu.getIndex(mainCharacter.x - 32, mainCharacter.y, 32, 32, mapWidth);
			if (!CollisionDetection(tu.getIndex(mainCharacter.x - 32, mainCharacter.y - 32, 32, 32, mapWidth), collisionsIndex)) {
				if (index%mapWidth > 4 && index%mapWidth < mapWidth - 5) {
					createjs.Tween.get(mapContainer).to({x: mapContainer.x + mapScale*32}, 250);
				}
				if (Math.floor(index/mapWidth) > 5 && Math.floor(index/mapWidth) < mapWidth - 4) {
					createjs.Tween.get(mapContainer).to({y: mapContainer.y + mapScale*32}, 250);
				}
				createjs.Tween.get(mainCharacter).to({x: mainCharacter.x - 32}, 250);
				createjs.Tween.get(mainCharacter).to({y: mainCharacter.y - 32}, 250);
				mainCharacter.scale.x = mainCharacterScale;
			}
		}
		else if (keyW && keyD && !keyA && !keyS) {
			var index = tu.getIndex(mainCharacter.x + 32, mainCharacter.y - 32, 32, 32, mapWidth);
			if (!CollisionDetection(index, collisionsIndex)) {
				if (Math.floor(index/mapWidth) > 4 && Math.floor(index/mapWidth) < mapWidth - 5) {
					createjs.Tween.get(mapContainer).to({y: mapContainer.y + mapScale*32}, 250);
				}
				if (index%mapWidth > 5 && index%mapWidth < mapWidth - 4) {
					createjs.Tween.get(mapContainer).to({x: mapContainer.x - mapScale*32}, 250);
				}
				createjs.Tween.get(mainCharacter).to({x: mainCharacter.position.x + 32}, 250);
				createjs.Tween.get(mainCharacter).to({y: mainCharacter.y - 32}, 250);
				mainCharacter.scale.x = -mainCharacterScale;
			}
		}
		else if (keyD && keyS && !keyA && !keyW) {
			var index = tu.getIndex(mainCharacter.x + 32, mainCharacter.y + 32, 32, 32, mapWidth);
			if (!CollisionDetection(index, collisionsIndex)) {
				if (index%mapWidth > 5 && index%mapWidth < mapWidth - 4) {
					createjs.Tween.get(mapContainer).to({x: mapContainer.x - mapScale*32}, 250);
				}
				if (Math.floor(index/mapWidth) > 5 && Math.floor(index/mapWidth) < mapWidth - 4) {
					createjs.Tween.get(mapContainer).to({y: mapContainer.y - mapScale*32}, 250);
				}
				createjs.Tween.get(mainCharacter).to({x: mainCharacter.position.x + 32}, 250);
				createjs.Tween.get(mainCharacter).to({y: mainCharacter.y + 32}, 250);
				mainCharacter.scale.x = -mainCharacterScale;
			}			
		}
		else if (keyS && keyA && !keyW && !keyD) {
			var index = tu.getIndex(mainCharacter.x - 32, mainCharacter.y + 32, 32, 32, mapWidth);
			if (!CollisionDetection(index, collisionsIndex)) {
				if (Math.floor(index/mapWidth) > 5 && Math.floor(index/mapWidth) < mapWidth - 4) {
					createjs.Tween.get(mapContainer).to({y: mapContainer.y - mapScale*32}, 250);
				}
				if (index%mapWidth > 4 && index%mapWidth < mapWidth - 5) {
					createjs.Tween.get(mapContainer).to({x: mapContainer.x + mapScale*32}, 250);
				}
				createjs.Tween.get(mainCharacter).to({x: mainCharacter.x - 32}, 250);
				createjs.Tween.get(mainCharacter).to({y: mainCharacter.y + 32}, 250);
				mainCharacter.scale.x = mainCharacterScale;
			}			
		}
		else {
			if (keyA) {
				var index = tu.getIndex(mainCharacter.x - 32, mainCharacter.y, 32, 32, mapWidth);
				if (!CollisionDetection(index, collisionsIndex)) {
					if (index%mapWidth > 4 && index%mapWidth < mapWidth - 5) {
						createjs.Tween.get(mapContainer).to({x: mapContainer.x + mapScale*32}, 250);
					}
					createjs.Tween.get(mainCharacter).to({x: mainCharacter.x - 32}, 250);
					mainCharacter.scale.x = mainCharacterScale;
				}
					
			}
			else if (keyD) {
				var index = tu.getIndex(mainCharacter.x + 32, mainCharacter.y, 32, 32, mapWidth);
				if (!CollisionDetection(index, collisionsIndex)) {
					if (index%mapWidth > 5 && index%mapWidth < mapWidth - 4) {
						createjs.Tween.get(mapContainer).to({x: mapContainer.x - mapScale*32}, 250);
					}
					createjs.Tween.get(mainCharacter).to({x: mainCharacter.position.x + 32}, 250);
					mainCharacter.scale.x = -mainCharacterScale;
				}
			}
			else if (keyS) {
				var index = tu.getIndex(mainCharacter.x, mainCharacter.y + 32, 32, 32, mapWidth);
				if (!CollisionDetection(index, collisionsIndex)) {
					if (Math.floor(index/mapWidth) > 5 && Math.floor(index/mapWidth) < mapWidth - 4) {
						createjs.Tween.get(mapContainer).to({y: mapContainer.y - mapScale*32}, 250);
					}
					createjs.Tween.get(mainCharacter).to({y: mainCharacter.y + 32}, 250);
				}
			}
			else if (keyW) {
				var index = tu.getIndex(mainCharacter.x, mainCharacter.y - 32, 32, 32, mapWidth);
				if (!CollisionDetection(index, collisionsIndex)) {
					if (Math.floor(index/mapWidth) > 4 && Math.floor(index/mapWidth) < mapWidth - 5) {
						createjs.Tween.get(mapContainer).to({y: mapContainer.y + mapScale*32}, 250);
					}
					createjs.Tween.get(mainCharacter).to({y: mainCharacter.y - 32}, 250);
				}
			}
		}
	}
}