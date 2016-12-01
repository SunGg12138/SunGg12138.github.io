var SearchPrompt = function(id) {
	this.box = document.getElementById(id);
	this.init();
};
SearchPrompt.prototype = {
	constructor: SearchPrompt,
	init: function(){
		this.searchTextDom = this.box.querySelectorAll('.search-text')[0];
		this.searchResultDom = this.box.querySelectorAll('.search-result')[0];
		//searchResultDom 是否有鼠标在上面
		this.resultDomHover = false;
		//searchTextDom 是否获取了焦点
		this.searchDomFocus = false;
		//模糊查询的结果
		this.searchResult = [];
		//添加事件
		this.addEvent();
		//模拟数据
		this.data = [];
	},
	addEvent: function(){
		this.searchTextDom.addEventListener('keyup', function(e){
			e.stopPropagation();
			this.likeQuery();
		}.bind(this));

		this.searchTextDom.addEventListener('focus', function(){
			this.searchDomFocus = true;
			if (this.searchResult[0]) {
				this.searchResultDom.style.display = 'block';
			};
		}.bind(this));

		this.searchTextDom.addEventListener('blur', function(){
			this.searchDomFocus = false;
			this.tryHidden();
		}.bind(this));

		this.searchResultDom.addEventListener('mouseover', function(){
			this.resultDomHover = true;
		}.bind(this));

		this.searchResultDom.addEventListener('mouseout', function(){
			this.resultDomHover = false;
			this.tryHidden();
		}.bind(this));

		this.searchResultDom.addEventListener('click', function(e){
			e.stopPropagation();
			var elem = e.target || e.srcElement;
			if (elem.tagName === 'LI') {
				window.open(elem.getAttribute('data-href'));
			};
		});
	},
	tryHidden: function(){
		if (!this.resultDomHover && !this.searchDomFocus) {
			this.searchResultDom.style.display = 'none';
		};
	},
	likeQuery: function(){
		var searchText = this.searchTextDom.value,
			tempArr = [],
			i,
			length;
		for (i=0,length=this.data.length;i<length;i++) {
			if (this.data[i].searchText.indexOf(searchText)>-1) {
				tempArr.push(this.data[i]);
			};
			if (tempArr.length===5) {
				break;
			};
		};
		if (typeof tempArr[0] !== 'undefined') {
			this.searchResult = tempArr;
			this.updateView();
		};
	},
	updateView: function(){
		var li = document.createElement('li'),
			a = document.createElement('a'),
			frag = document.createDocumentFragment();
		this.searchResult.forEach(function(item, index){
			var thisLi = li.cloneNode(),
				thisA = a.cloneNode();
			thisLi.setAttribute('data-href', item.href);
			thisA.innerText = item.searchText;
			thisA.href = item.href;
			thisLi.appendChild(thisA);
			frag.appendChild(thisLi);
		});
		this.searchResultDom.innerHTML = '';
		this.searchResultDom.appendChild(frag);
		this.searchResultDom.style.display = 'block';
	}
};