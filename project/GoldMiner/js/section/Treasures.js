/*
*treasuresConfig 为 object类型
*	.types(object) 是宝藏的数量，所在地下的深度，样式
*		.name 宝藏名字
*		.count 数量
*		.deep 深度
*		.score 分数
*		.slowRank 减速等级
*/
var Treasures = function(treasuresConfig) {
	this.tags = [];   //所有宝藏的 DOM 元素
	this.attrs = [];   //所有宝藏的属性
	this.types = treasuresConfig.types;   //所有宝藏的类型
};
Treasures.prototype = {
	init: function() {
		var thisWidth,DeepPos,originX,originY,isRandomSuccess,count;
		this.types.forEach(function(item, index){
			for (var i=0;i<item.count;i++) {
				isRandomSuccess = true;   //随机的位置是否符合需要
				count = 0;
				thisWidth = item.width;
				DeepPos = this.getDeepPos(item.deepRank, thisWidth);
				originX = getRandom(0, mainW-thisWidth)+thisWidth/2;
				originY = getRandom(DeepPos[0], DeepPos[1])+thisWidth/2;
				var tempObj = {originX: originX, originY: originY, width: thisWidth};
				item.tag = item.tag || '<i class="treasures">';
				var thisTag = $(item.tag);
				thisTag[0].style = item.style;
				thisTag.css({
					left: originX-thisWidth/2,
					top: originY-thisWidth/2,
					width: thisWidth,
					height: thisWidth
				});
				thisTag.html(item.name);
				thisTag.attr('data-slowrank', item.slowRank);
				thisTag.attr('data-score', item.score);
				$main.append(thisTag);
				this.tags.push(thisTag);
				this.attrs.push(tempObj);
			};
		}.bind(this));
	},
	clearAll: function() {
		this.tags.forEach(function(item){
			item.remove();
		});
		return this;
	},
	clearOne: function(index) {
		this.tags[index].remove();
		this.attrs.splice(index, 1);
		this.tags.splice(index, 1);
	},
	getDeepPos: function (deepRank, thisWidth) {
		var minValue = mainH-thisWidth-50-config.ropeHeight*2.5;
		var maxValue = mainH-thisWidth-50;
		var preDeep = (maxValue-minValue)/3;
		return [(deepRank-1)*preDeep+minValue, deepRank*preDeep+minValue];
	}
};
//宝藏被拉取时的函数
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