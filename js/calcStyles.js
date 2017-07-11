	var shownNav=false;
	var shownColors=false;
	var styleNav;//=document.getElementsByClassName('styleOptions');
	var modeH;//=document.getElementsByClassName('modeH')[0];
	var modeF;//=document.getElementsByClassName('modeF')[0];
	var bkt;//=document.getElementsByClassName('bkt')[0];
	var btns;//=document.getElementsByClassName('calcRow');
	define(["js/calcStyles.js"],function(){
	return{
	setStyleElements:function(styleNavI,btnsI,modeHI,modeFI,bktI) {
	styleNav=styleNavI;
	btns=btnsI;
	modeH=modeHI;
	modeF=modeFI;
	bkt=bktI;
}
	};});
function openStyleNav() {
	shownNav=!shownNav;
	var h=480*(+shownNav);
	console.log(styleNav[0]);
	styleNav[0].style.cssText="height:"+h+"px; \
	display:block;\
	transition:ease-in .75s height;\
	";
}
var curStyle;
function hoverStylebtn(btn) {
	curStyle=btn.childNodes[1].style.cssText;
	btn.childNodes[1].style.cssText="margin-top:200px; \
	opacity:0; \
	transition:ease-in .35s all;\
	";
}
function leaveStylebtn(btn){
	btn.childNodes[1].style.cssText=curStyle;
}
function styleColorNav(btn) {
		var styleNavItem=btn.getElementsByTagName('ul')[0];
	var h;
	if(getComputedStyle(styleNavItem).height==="0px")
		h=70;
	else
		h=0;
	styleNavItem.style.cssText="height:"+h+"px; \
	display:block;\
	transition:ease-in .75s height;\
	";
}
var shownHistory=false;
function showHistory(){
	historyList.style.display=shownHistory?"none":"block";
	shownHistory=!shownHistory;
}
function applyColor(btn,element) {
	var btns1;
	//var tb=document.getElementById('tbRes');
	switch(element){
		case"btn":
for(var i=0;i<btns.length;i++){
			btns1=btns[i].getElementsByTagName('div');
			for (var j=0;j<btns1.length;j++)
			btns1[j].style.backgroundColor=getComputedStyle(btn).backgroundColor;
	}
		break;
		case "txt":
			for(var i=0;i<btns.length;i++){
			btns1=btns[i].getElementsByTagName('div');
			for (var j=0;j<btns1.length;j++)
			btns1[j].style.color=getComputedStyle(btn).backgroundColor;
	}
			tbRes.style.color=getComputedStyle(btn).backgroundColor;	
		break;
		case "screen":
			tbRes.style.backgroundColor=getComputedStyle(btn).backgroundColor;
		break;
	}
}
function switchModeStyle(btn) {
	if(btn.getAttribute('class').indexOf("modeOn")<0){
	if(btn===modeH){
		bkt.style.cssText="height:0px;\
		transition:ease-out .3s all;\
		overflow:hidden;\
		";
		modeH.setAttribute('class',modeH.getAttribute('class')+" modeOn");
		modeF.setAttribute('class',modeF.getAttribute('class').replace("modeOn",""));
	}
	if(btn===modeF){
		bkt.style.cssText="height:69px;\
		transition:ease-out .3s all;\
		overflow:hidden;\
		";
		modeF.setAttribute('class',modeF.getAttribute('class')+" modeOn");
		modeH.setAttribute('class',modeH.getAttribute('class').replace("modeOn",""));
	}
}


}
//#№ffa1a1
function errorAnimation(tb,tbclr) {
	//tb.style.backgroundColor="#ffa1a1";
	tbRes.style.backgroundColor=""+tbclr;
	tbRes.style.transition=".5s all ease-out";
}