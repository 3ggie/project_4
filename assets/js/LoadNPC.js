//LoadNPC takes 4 arguments as described below.
//It creates a movieClip object for the sprite and
//begins moving them within boundaries and other collision detection.
//Arguments:
//index = GID number on map. Grid ID number
//range = distance from starting point it can roam
//fileLocation = file location of sprites, without the number or .png
//				 i.e. "./assets/Characters/NPCs/Enemy"
//numSprites = the number of sprites for npc to make a movieClip of.
//Example Function Call:
//  LoadNPC(50, 2, "./assets/Characters/NPCs/Enemy", 4);
function LoadNPC(index, range, fileLocation, numSprites) {
	//console.log("Loading Character");
	var textureArray = [];
	var npc;
	for (var i = 1; i < numSprites + 1; i++) {
		texture = new PIXI.Texture.fromImage(fileLocation+i+".png");
		textureArray.push(texture);
	}
	npc = new PIXI.extras.MovieClip(textureArray);
	npc.anchor.x = 0.5;
	npc.anchor.y = 0.5;
	var point = tu.getTile(index, mapArray, world);
	npc.position.x = point.centerX;
	npc.position.y = point.centerY - yOffset;
	npc.scale.x = mainCharacterScale;
	npc.scale.y = mainCharacterScale;
	npc.play();
	npc.animationSpeed = 0.075;
	npcArray.push(npc);
	npcStartArray.push(index);
	npcRangeArray.push(range);
	//return npc;
}

function NPCMovement() {
	for (var i = 0; i < npcArray.length; i++) {
		//console.log("StartIndex " + npcStartArray[i]);
		//console.log("range " + npcRangeArray[i]);
		//consle.log(npcArray[i].x);
		//console.log(npcArray[i].y);
		//var test = tu.getIndex(npcArray[i].x, npcArray[i].y, 32, 32, mapWidth);
		//console.log("beforeIndexX " + test%mapWidth);
		//console.log("beforeIndexY " + Math.floor(test/mapWidth));
		var direction = Math.floor(Math.random() * 4);
		if (direction == 0) { //Left
			var index = tu.getIndex(npcArray[i].x - 32, npcArray[i].y, 32, 32, mapWidth);
			if (!CollisionDetection(index, collisionsIndex)){
				if (Math.abs(npcStartArray[i]%mapWidth - index%mapWidth) <= npcRangeArray[i]){
					createjs.Tween.get(npcArray[i]).to({x: npcArray[i].x - 32}, 250);
				}
				else {
					//console.log("Hit left bounds");
				}
			}
			else {
				//console.log("Collision Left");
			}
			npcArray[i].scale.x = npcCharacterScale;
		}
		else if (direction == 1) { //Up
			index = tu.getIndex(npcArray[i].x, npcArray[i].y - 32, 32, 32, mapWidth);
			if (!CollisionDetection(index, collisionsIndex)) {
				if (Math.abs(Math.floor(npcStartArray[i]/mapWidth) - Math.floor(index/mapWidth)) <= npcRangeArray[i]){
					createjs.Tween.get(npcArray[i]).to({y: npcArray[i].y - 32}, 250);
				}
				else {
					//console.log("Hit Up bounds");
				}
			}
			else {
				//console.log("Collision Up");
			}
		}
		else if (direction == 2) { //Right
		index = tu.getIndex(npcArray[i].x + 32, npcArray[i].y, 32, 32, mapWidth);
			if (!CollisionDetection(index, collisionsIndex)) {
				if (Math.abs(npcStartArray[i]%mapWidth - index%mapWidth) <= npcRangeArray[i]){
					createjs.Tween.get(npcArray[i]).to({x: npcArray[i].x + 32}, 250);
				}
				else {
					//console.log("Hit Right bounds");
				}
			}
			else {
				//console.log("Collision Right");
			}
			npcArray[i].scale.x = -npcCharacterScale;
		}
		else if (direction == 3) { //Down
			var index = tu.getIndex(npcArray[i].x, npcArray[i].y + 32, 32, 32, mapWidth);
			if (!CollisionDetection(index, collisionsIndex)) {
				if (Math.abs(Math.floor(npcStartArray[i]/mapWidth) - Math.floor(index/mapWidth)) <= npcRangeArray[i]){
					createjs.Tween.get(npcArray[i]).to({y: npcArray[i].y + 32}, 250);
				}
				else {
					//console.log("Hit Down bounds");
				}
			}
			else {
				//console.log("Collision Down");
			}
		}
	}
	setTimeout(NPCMovement, 1000);
}