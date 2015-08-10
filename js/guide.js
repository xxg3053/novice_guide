$(function(){
	var oMask = $('#mask');
	var oSearch = $('#searchTip');
	var aStep = oSearch.find('div');
	var aA = oSearch.find('a');
	var aClose = oSearch.find('span');

	//mask 父框 第一个单元显示出来
	oMask.css('display','block');
	oSearch.css('display','block');
	$(aStep.get(0)).css('display','block');

	//下一步按钮
	for (var i = 0; i < aStep.length; i++) {
		aA[i].index = i;
		$(aA[i]).click(function(event) {
			console.log(this.index)
			$(this.parentNode).css('display','none');
			if(this.index < aStep.length -1){
				$(aStep[this.index+1]).css('display','block');
			}else if(this.index == aStep.length-1){
				$(oMask).css('display','none');
				$(oSearch).css('display','none');
			}
		});
	};
});