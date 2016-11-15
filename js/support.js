function removeClass(dom, className){
	var classArr = dom.className.replace(/(^\s+)|(\s+$)/g,'').split(' '),
		reg = new RegExp("^"+className+"$"),
		isRemove = false;
	for(var i=0;i<classArr.length;i++){
		if(/^\s*$/.test(classArr[i]) || reg.test(classArr[i])){
			classArr.splice(i,1);
			i--;
			isRemove = true;
		};
	};
	dom.className = classArr.join(" ");
	return isRemove;
}
function addClass(dom, className) {
	var classList = dom.className;
	classList = classList.replace(/(^\s+)|(\s+$)/g, '');
	dom.className = classList+' ' + className;
}
function hasClass(dom, className) {
	if (!dom.className) return false;
	var classList = dom.className.split(/\s+/),
		i,
		length;
	for (i=0,length=classList.length;i<length;i++) {
		if (classList[i] === className) {
			return true;
		};
	};
	return false;
}
function forefathersHasClass(dom, className) {
	var forefather;
	while ((forefather = dom.parentNode) && dom.parentNode.tagName && dom.parentNode.tagName !== 'HTML') {
		if (hasClass(forefather, className)) {
			return forefather;
		};
		dom = forefather;
	};
	return false;
}