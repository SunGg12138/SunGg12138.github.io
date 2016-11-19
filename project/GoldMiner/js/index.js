var $rope = $('#rope');
var $body = $(document.body);
var $main = $('#main');
var mainW = $main.width();
var mainH = $main.height();
var nowHeight;   //当前绳子的长度
var stopLoop = true;
var config = {
	ropeHeight: 100,   //rope 初始长度
	maxHeight: mainH-30,   //rope 最大长度
	hookHeight: 20,   //钩子的长度
	ropeSpeed: 5,   //绳子当前速度
	nowScore: 0,
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
var treasures = new Treasures({
	types: [
		{
			name: '大石头',
			count: 2,
			deepRank: 2,
			score: 50,
			slowRank: 4,
			width: 80,
			style: 'background:#708090;'
		},
		{
			name: '小石头',
			count: 2,
			deepRank: 2,
			score: 20,
			slowRank: 2,
			width: 40,
			style: 'background:#708090;'
		},
		{
			name: '小金块',
			count: 2,
			deepRank: 3,
			score: 200,
			slowRank: 1,
			width: 40,
			style: 'background:rgb(255,215,0);'
		},
		{
			name: '大金块',
			count: 2,
			deepRank: 3,
			score: 500,
			slowRank: 3,
			width: 80,
			style: 'background:rgb(255,215,0);'
		}
	]
});
ropeRotate();
treasures.init();