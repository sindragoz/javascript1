var styleNavM=document.getElementsByClassName('styleOptions')[0];
var modeHM=document.getElementsByClassName('modeH')[0];
var modeFM=document.getElementsByClassName('modeF')[0];
var bktM=document.getElementsByClassName('bkt')[0];
var btnsM=document.getElementsByClassName('calcRow');
var addSymb;
var switchMode;
var getRes;
var openStyleNav;
require(["js/calculator.js"],function(Calc){
	console.log(document.getElementsByName('tbResult')[0]);
Calc.setTbRes(document.getElementsByName('tbResult')[0]);
addSymb=Calc.addSymb;
switchMode=Calc.switchMode;
getRes=Calc.getRes;
clearTb=Calc.clearTb;
Calc.sethistoryList(document.getElementsByClassName("historyList")[0]);
});
require(["js/calcStyles.js"],function(cStyles){
	cStyles.setStyleElements(document.getElementsByClassName('styleOptions'),btnsM,modeHM,modeFM,bktM);
	});

	console.log("styleNavM:"+styleNavM);


//alert(Calc.addSymb(document.getElementByClassName('btn1')));