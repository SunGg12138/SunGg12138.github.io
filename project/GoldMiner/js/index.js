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
var config = {
	ropeHeight: 100,   //rope 初始长度
	maxHeight: mainH-40,   //rope 最大长度
	hookHeight: 25,   //钩子的长度
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
// var script = $('<script>');
// script[0].src = 'js/level/lev1.js';
// $body.append(script);