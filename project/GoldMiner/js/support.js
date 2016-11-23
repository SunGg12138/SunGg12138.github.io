function getRandom(min, max) {
	var random = Math.random()*(max-min+1) + min;
	if (min===0) {
		return Math.floor(random);
	};
	return Math.ceil(random);
}
function getmatrix(a,b,c,d,e,f){  
    var aa=Math.round(180*Math.asin(a)/ Math.PI);  
    var bb=Math.round(180*Math.acos(b)/ Math.PI);  
    var cc=Math.round(180*Math.asin(c)/ Math.PI);  
    var dd=Math.round(180*Math.acos(d)/ Math.PI);  
    var deg=0;  
    if(aa==bb||-aa==bb){  
        deg=dd;  
    }else if(-aa+bb==180){  
        deg=180+cc;  
    }else if(aa+bb==180){  
        deg=360-cc||360-dd;  
    }  
    return deg>=360?0:deg;  
    //return (aa+','+bb+','+cc+','+dd);  
}
function disparityDetection(x, y, num) {
	return Math.pow(x, 2) + Math.pow(y, 2) <= Math.pow(num, 2);
}

//获取钩子的坐标
function getHookPos() {
    var nowDeg = eval('get'+$rope.css('transform'));   //获取现在的角度
    var thisX, thisY;
    if (nowDeg>180) {
        nowDeg = (360 - nowDeg)/180*Math.PI;//转换成 π
        thisX =  Math.sin(nowDeg) * (nowHeight+config.hookHeight) + mainW/2;
        thisY = Math.cos(nowDeg) * (nowHeight+config.hookHeight);
    } else {
        nowDeg = nowDeg/180*Math.PI;//转换成 π
        thisX = - Math.sin(nowDeg) * nowHeight + mainW/2;
        thisY = Math.cos(nowDeg) * nowHeight;
    };
    return {
        x: thisX,
        y: thisY
    };
}
function isWin() {
    if (Number($score.html()) >= Number($rankScore.html())) {
        alert('赢了');
    };
}
