var MenuTree = function(id, data) {
	//如果第一个参数是 dom 节点,就直接赋值，否则使用 getElementById 获取 dom
	if (id.nodeType) {
		this.dom = id;
	}else{
		this.dom = document.getElementById(id);
	};
	this.data = data;
	this.init();
};
MenuTree.prototype = {
	constructor: MenuTree,
	init: function(){
		//初始化 父亲元素
		this.fatherUl = document.createElement('ul');
		this.fatherUl.className = 'menuList';
		//初始化有菜单的元素
		this.hasMenu = document.createElement('li');
		this.hasMenu.innerHTML = "<span>[+]</span>";
		this.hasMenu.className = "hasMenu";
		//初始化没有菜单的元素
		this.noMenu = document.createElement('li');
		this.noMenu.className = "noMenu";
		this.addFatherUl();
		this.dataInit();
		this.addEvent();
	},
	dataInit: function(){
		var frag = document.createDocumentFragment();
		this.data.forEach(function(item, index){
			//判断是否有菜单
			if (item.items && item.items[0]) {
				var thisLi = this.hasMenu.cloneNode(true);
				thisLi.innerHTML += item.itemName;
				thisLi.setAttribute('data-index', ''+index);
			}else{
				var thisLi = this.noMenu.cloneNode(true);
				thisLi.innerHTML += item.itemName;
			};
			frag.appendChild(thisLi);
		}.bind(this));
		this.fatherUl.appendChild(frag);
	},
	addFatherUl: function(){
		//添加父亲元素
		this.dom.appendChild(this.fatherUl);
	},
	addEvent: function(){
		this.dom.addEventListener('click', function(e){
			var elem = e.target || e.srcElement;
			if (hasClass(elem, 'noMenu')) {
				e.stopPropagation();
				return;
			};
			//判断自己或者自己的祖先是否有 hasMenu 类
			if (hasClass(elem, 'hasMenu') || (elem=forefathersHasClass(elem, 'hasMenu'))) {
				e.stopPropagation();
				var menuList = $(elem).find('.menuList'),
					dataIndex = elem.getAttribute('data-index'),
					menuMark = $(elem).find('span').eq(0);
				//如果没有菜单列表，则添加，有则显示或者隐藏
				if (menuList.length === 0) {
					new MenuTree(elem, this.data[dataIndex].items);
					this.menuChange(menuMark, false);
				}else if (menuList.css('display') === 'block') {
					menuList.hide();
					this.menuChange(menuMark, true);
				}else {
					menuList.show();
					this.menuChange(menuMark, false);
				};
			};
		}.bind(this));
	},
	menuChange: function(elem, boolean){
		if (boolean) {
			elem.html('[+]');
		}else{
			elem.html('[-]');
		};
	}
};