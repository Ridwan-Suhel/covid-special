$(document).ready(function(){
    
	new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	navigation: true,
	navigationTooltips: ['Home', 'Live Data', 'Advice'],
	showActiveTooltip: true,
	anchors: ['section1', 'section2', 'section3']
});

	
})