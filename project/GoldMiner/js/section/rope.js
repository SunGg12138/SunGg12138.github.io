function ropeShorten() {
	nowHeight = parseInt($rope[0].style.height);
	$rope[0].style.height = nowHeight - config.ropeSpeed + 'px';
}
function ropeElongate() {
	nowHeight = parseInt($rope[0].style.height);
	$rope[0].style.height = nowHeight + config.ropeSpeed + 'px';
}
function ropeRotate() {
	$rope.addClass('ropeRotate');
}
function stopRopeRotate() {
	var nowStatus = $rope.css('transform');
	$rope.removeClass('ropeRotate');
	$rope.css('transform', nowStatus);
}
function ropeHit() {
	function tempLoopFunc() {
		if (nowHeight >= config.maxHeight || ropeCollisionDetection()) {
			ropeBack();
		};
	}
	stopRopeRotate();
	gameLoop.loopFuncs = [ropeElongate, tempLoopFunc];
	stopLoop = false;
	gameLoop();
}
function ropeBack() {
	function tempLoopFunc() {
		if (nowHeight <= config.ropeHeight) {
			if (gameLoop.loopFuncs.length > 2) {
				treasures.clearOne(config.treasure.treasureIndex);
				$('#score').html($('#score').html()-0+Number(config.treasure.treasureDOM.data('score')));
				isWin();
			};
			config.ropeSpeed = 5;
			gameLoop.loopFuncs = [];
			$rope[0].style = 'height:'+config.ropeHeight + 'px';
			config.treasure = {};
			stopGameLoop();
			ropeRotate();
			return true;    //让gameLoop 的 loopFuncs 停止循环
		};
	}
	gameLoop.loopFuncs = [ropeShorten, tempLoopFunc];
}

//碰撞检测
function ropeCollisionDetection() {
    var hookPos = getHookPos();
    treasures.attrs.forEach(function(item, index){
        var disparityX =  Math.abs(item.originX - hookPos.x);
        var disparityY =  Math.abs(item.originY - hookPos.y);
        var isSatisfy = disparityDetection(disparityX, disparityY, item.width/2);
        if (isSatisfy) {
            config.treasure.treasureDOM = treasures.tags[index];
            config.treasure.treasureIndex = index;
            config.treasure.treasureAttr = item;
            config.ropeSpeed -= treasures.tags[index].data('slowrank');
            if (config.ropeSpeed<1) config.ropeSpeed = 1;
            ropeBack();
            pullTreasure();
        };
    });
}