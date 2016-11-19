//游戏每帧刷新
function gameLoop() {
	for (var i=0;i<gameLoop.loopFuncs.length;i++) {
		//如果函数返回 true 则退出循环
		if (gameLoop.loopFuncs[i]()) {  
			break;
		};
	};
	if (!stopLoop) {
		requestAnimationFrame(gameLoop);
	};
}
gameLoop.loopFuncs = [];
//停止执行 gameLoop
function stopGameLoop() {
	stopLoop = true;
}