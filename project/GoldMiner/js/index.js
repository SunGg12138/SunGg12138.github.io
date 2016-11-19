var $rope = $('#rope');
var $body = $(document.body);
var $main = $('#main');
var mainW = $main.width();
var mainH = $main.height();
var nowHeight;   //当前绳子的长度
var stopLoop = true;
var config = {
	ropeHeight: 100,   //rope 初始长度
	maxHeight: mainH-50-40,   //rope 最大长度
	hookHeight: 20,   //钩子的长度
	ropeSpeed: 5,   //绳子当前速度
	treasure: {}   //钩到的矿物属性
};
$body.keydown(function(e){
	e.preventDefault();
	if (e.key === 'k' && stopLoop) {
		ropeHit();
	};
});
$body.keydown(function(e){
	e.preventDefault();
	if (e.key === 's') {
		stopGameLoop();
	};
});
// 开始
var treasures = new Treasures();
ropeRotate();
treasures.init();