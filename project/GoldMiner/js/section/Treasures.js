var Treasures = function(count) {
	this.attrs = [];   //所有宝藏的属性

	this.types = [];   //所有宝藏的类型--
	this.count = count || 10;

	this.tags = [];
};
Treasures.prototype = {
	init: function() {
		// this.typesDensity = [];   //宝藏类型的密度
		// this.typesRarity = [];   //宝藏类型的稀有度

		for (var i=0;i<this.count;i++) {
			var thisWidth = getRandom(1,3)*20 + 20;
			var thisPositionX = getRandom(0, mainW-thisWidth);
			var thisPositionY = getRandom(config.ropeHeight*2, mainH-thisWidth);
			var tempObj = {originX: thisPositionX+thisWidth/2, originY: thisPositionY+thisWidth/2, width: thisWidth};
			var thisTag = $('<i class="treasures">');
			thisTag.css({
				width: thisWidth,
				height: thisWidth,
				background: 'red',
				left: thisPositionX,
				top: thisPositionY
			});
			thisTag.html(i);
			$main.append(thisTag);
			this.tags.push(thisTag);
			this.attrs.push(tempObj);
		};

	},
	clearAll: function(){
		this.tags.forEach(function(item){
			item.remove();
		});
	},
	clearOne: function(index){
		this.tags[index].remove();
		this.attrs.splice(index, 1);
		this.types.splice(index, 1);
		this.tags.splice(index, 1);
		this.count--;
	}
};

function pullTreasure(treasureDOM, treasureAttr) {
	function tempLoopFunc() {
		var hookPos = getHookPos();
		config.treasure.treasureDOM.css({
			left: hookPos.x - config.treasure.treasureAttr.width/2,
			top: hookPos.y - config.treasure.treasureAttr.width/2
		});
		config.treasure.treasureAttr.originX = hookPos.x;
		config.treasure.treasureAttr.originY = hookPos.y;
	}
	gameLoop.loopFuncs.push(tempLoopFunc);
}