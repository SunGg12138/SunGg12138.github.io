$rank.html(1);
$rankScore.html(1000);
$score.html(0);
// 开始
if (treasures instanceof Treasures) {
	treasures.clearAll();
};
var treasures = new Treasures({
	types: [
		{
			name: '大石头',
			count: 2,
			deepRank: 2,
			score: 20,
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