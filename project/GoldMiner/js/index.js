var $rope = $('#rope');
var $body = $(document.body);
var $main = $('#main');
var $rank = $('#rank');
var $rankScore = $('#rank-score');
var $score = $('#score');
var mainW = $main.width();
var mainH = $main.height();
var nowHeight;   //当前绳子的长度
var stopLoop = true;
var levelScript;
var levelConfig = {
	levelNum: 1
};
var config = {
	ropeHeight: 100,   //rope 初始长度
	maxHeight: mainH-40,   //rope 最大长度
	hookHeight: 25,   //钩子的长度
	ropeSpeed: 5,   //绳子当前速度
	nowScore: 0,
	treasure: {}   //钩到的矿物属性
};
function setLevel() {
	if (levelScript) {
		document.body.removeChild(levelScript);
	};
	levelScript = document.createElement('script');
	levelScript.src = 'js/level/lev'+levelConfig.levelNum+'.js';
	document.body.appendChild(levelScript);
}
$body.keydown(function(e){
	e.preventDefault();
	if (e.key === 'k' && stopLoop) {
		ropeHit();
	};
});
setLevel(1);