$rank.html(1);
$rankScore.html(1600);
$score.html(0);
// 开始
if (treasures instanceof Treasures) {
	treasures.clearAll();
};
var treasures = new Treasures({
	types: [
		{
			name: '小石头',
			count: 3,
			deepRank: 2,
			score: 50,
			slowRank: 2,
			width: 40,
			tag: '<img src="./images/rock.png">'
		},
		{
			name: '大石头',
			count: 3,
			deepRank: 2,
			score: 100,
			slowRank: 4,
			width: 80,
			tag: '<img src="./images/rock.png">'
		},
		{
			name: '金盆',
			count: 2,
			deepRank: 3,
			score: 500,
			slowRank: 2,
			width: 60,
			tag: '<img src="./images/gold-repository.png">'
		},
		{
			name: '彩色宝石',
			count: 1,
			deepRank: 3,
			score: 800,
			slowRank: 2,
			width: 40,
			tag: '<img src="./images/high-grade-diamond.png">'
		},
		{
			name: '红宝石',
			count: 1,
			deepRank: 3,
			score: 600,
			slowRank: 2,
			width: 40,
			tag: '<img src="./images/red-ruby.png">'
		},
	]
});
ropeRotate();
treasures.init();