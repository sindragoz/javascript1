var tbRes;
var tbResStyle;
var tbResBgColor;
var historyList;
//2+(√(5^(√(2-1)*3)-4)^3)^2
	var fzmin="12px";
	var fzmax="30px";
	var mode=false;
	define(["js/calculator.js"],function(){
	return{
		tbRes:"",
	switchMode:function(m){
		mode=m;
	},
	 setFz:function (min,max) {
	fzmin=min;
	fzmax=max;
},
 setTbRes:function(tb){
		tbRes=tb;
		tbResStyle=tbRes.style.cssText;
	},
	sethistoryList:function (hl) {
		historyList=hl;
	},
	 addSymb:function(btn){
	if((checkOp(btn.innerHTML)||btn.innerHTML==="√")&&mode){
		if(btn.innerHTML==="√"){
			getRes();
			tbRes.value=""+(Math.sqrt(tbRes.value));
			
		}
		else
		getRes();
	}
	tbRes.style.fontSize=tbRes.value.length>=15?fzmin:fzmax;
	var op=false;
	if(checkOp(btn.innerHTML)){
		ops=true;
		dot=false;
		res=false;
	}
	if(tbRes.value!==""){
		op=checkOp(tbRes.value[tbRes.value.length-1]);
	}
	if(op&&checkOp(btn.innerHTML)){
			tbRes.value=tbRes.value.slice(0,tbRes.value.length-1);
		}
	if(btn.innerHTML==="."&&!dot){
		if(tbRes.value!==""&&!tbRes.value[tbRes.value.length-1].match(/[-*+/]/))
	tbRes.value+=btn.innerHTML;
	else
		tbRes.value+="0"+btn.innerHTML;
	dot=true;
	}
	else if(btn.innerHTML!==".")
		if(!(checkOp(btn.innerHTML)&&tbRes.value===""))
		tbRes.value+=btn.innerHTML;
	if(btn.innerHTML==="√"&&mode){
		tbRes.value=tbRes.value.replace("√","");
	}
},
  clearTb:function(){
	tbRes.style.fontSize=fzmax;
	tbRes.value="";
	dot=false;
},
  delSymb:function(){

	if(tbRes.value[tbRes.value.length-1]==="."){
		dot=false;
	}
	tbRes.value=tbRes.value.slice(0,tbRes.value.length-1);
	tbRes.style.fontSize=tbRes.value.length>=15?fzmin:fzmax;
},
  getRes:function(){
			if(mode)
		historyList.innerHTML+=tbRes.value+"; ";
		try{
	formatValue();
	if(tbRes.value===""||checkOp(tbRes.value[tbRes.value.length-1]))
		res=false;
	else res=true;
	if(res){
	tbRes.value=eval(tbRes.value);
	tbRes.style.fontSize=tbRes.value.length>=15?fzmin:fzmax;
}
	else throw exeption;
dot=false;
		}catch(e){
			tbResBgColor=tbRes.style.backgroundColor;
			tbRes.style.cssText=tbResStyle;
	tbRes.style.backgroundColor="#ffa1a1";
	console.log(tbRes.style.backgroundColor);
	//alert("Неверное выражение!");
	setTimeout(errorAnimation,10,tbRes,tbResBgColor);
		}
tbRes.style.fontSize=tbRes.value.length>=15?fzmin:fzmax;
}

	};
});


// export function switchMode(m) {
// 		mode=m;
// 	}
// export function setFz(min,max) {
// 	fzmin=min;
// 	fzmax=max;
// }
// export function setTbRes(tb){
// 		tbRes=tb;
// 		tbResStyle=tbRes.style.cssText;
// 	}
// export function sethistoryList(hl) {
// 		historyList=hl;
// 	}

// export function addSymb(btn){
// 	if((checkOp(btn.innerHTML)||btn.innerHTML==="√")&&mode){
// 		if(btn.innerHTML==="√"){
// 			getRes();
// 			tbRes.value=""+(Math.sqrt(tbRes.value));
			
// 		}
// 		else
// 		getRes();
// 	}
// 	tbRes.style.fontSize=tbRes.value.length>=15?fzmin:fzmax;
// 	var op=false;
// 	if(checkOp(btn.innerHTML)){
// 		ops=true;
// 		dot=false;
// 		res=false;
// 	}
// 	if(tbRes.value!==""){
// 		op=checkOp(tbRes.value[tbRes.value.length-1]);
// 	}
// 	if(op&&checkOp(btn.innerHTML)){
// 			tbRes.value=tbRes.value.slice(0,tbRes.value.length-1);
// 		}
// 	if(btn.innerHTML==="."&&!dot){
// 		if(tbRes.value!==""&&!tbRes.value[tbRes.value.length-1].match(/[-*+/]/))
// 	tbRes.value+=btn.innerHTML;
// 	else
// 		tbRes.value+="0"+btn.innerHTML;
// 	dot=true;
// 	}
// 	else if(btn.innerHTML!==".")
// 		if(!(checkOp(btn.innerHTML)&&tbRes.value===""))
// 		tbRes.value+=btn.innerHTML;
// 	if(btn.innerHTML==="√"&&mode){
// 		tbRes.value=tbRes.value.replace("√","");
// 	}
// }
// export function clearTb(){
// 	tbRes.style.fontSize=fzmax;
// 	tbRes.value="";
// 	dot=false;
// }
// export function delSymb(){

// 	if(tbRes.value[tbRes.value.length-1]==="."){
// 		dot=false;
// 	}
// 	tbRes.value=tbRes.value.slice(0,tbRes.value.length-1);
// 	tbRes.style.fontSize=tbRes.value.length>=15?fzmin:fzmax;
// }
// export function getRes(){
// 			if(mode)
// 		historyList.innerHTML+=tbRes.value+"; ";
// 		try{
// 	formatValue();
// 	if(tbRes.value===""||checkOp(tbRes.value[tbRes.value.length-1]))
// 		res=false;
// 	else res=true;
// 	if(res){
// 	tbRes.value=eval(tbRes.value);
// 	tbRes.style.fontSize=tbRes.value.length>=15?fzmin:fzmax;
// }
// 	else throw exeption;
// dot=false;
// 		}catch(e){
// 			tbResBgColor=tbRes.style.backgroundColor;
// 			tbRes.style.cssText=tbResStyle;
// 	tbRes.style.backgroundColor="#ffa1a1";
// 	console.log(tbRes.style.backgroundColor);
// 	//alert("Неверное выражение!");
// 	setTimeout(errorAnimation,10,tbRes,tbResBgColor);
// 		}
// tbRes.style.fontSize=tbRes.value.length>=15?fzmin:fzmax;
// }
var ops=false;
var dot=false;
var num=false;
var res=false;
function formatValue(){
	var res="("+tbRes.value+")";
	var num="";
	var cnt=0;
	var cnt1=0;

	while(res.indexOf("(")>=0&&cnt1<20){
		cnt1++;
		num="";
		for(var i=res.lastIndexOf("(")+1;res[i]!==")"&&i<res.length;i++){
				num+=res[i];
			}
				
				var numRep=num;
				if(num.indexOf("√")>=0||num.indexOf("^")>0){
					while(num.indexOf("√")>=0||num.indexOf("^")>=0){
						console.log(num.indexOf("√")>=0||num.indexOf("^")>=0);
						console.log("num="+num);
				if(num.indexOf("√")>=0){
				num=getSqrtValue(num);
				console.log("num[aftsqrt]="+num);
			}
			    if (num.indexOf("^")>=0){
			    	num=getPowValue(num);
					console.log("num[aft^]="+num);
				}
			}
				res=res.replace("("+numRep+")",eval(num));

			}
		
				else
				res=res.replace("("+num+")",eval(num));
			console.log("res[im]="+res);
			}
	// while(tbRes.value.indexOf("^")>0||tbRes.value.indexOf("√")>=0){
	// 	cnt=res.indexOf();
	// 	while()
	// 		}
console.log("res="+res);
tbRes.value=res;
}
//2+(√(5^(√(2-1)*3)-4)^3)^2
function getSqrtValue(num) {
	var i=num.indexOf("√")+1;
	var imnum="";
	while(!checkOp(num[i])&&i<num.length){
		imnum+=num[i];
		i++;
		//console.log("num[sqrt]="+imnum);
	}
	//console.log("num[]="+imnum);
	//console.log(num.replace("√"+imnum,"Math.sqrt("+imnum+")"));
	return (num.replace("√"+imnum,""+eval("Math.sqrt("+imnum+")")));
}
function getPowValue(num) {
	var imnum1="";
	var imnum2="";
	var i=num.indexOf("^")+1;
	if(num[i]==="-"){
		imnum1+=num[i];
		i++;
	}
	while(!checkOp(num[i])&&i<num.length){
		imnum1+=num[i];
		i++;
		//console.log("num1[sqr]="+imnum1);
	}
	i=num.indexOf("^")-1;
	while(!checkOp(num[i])&&i>=0){
		imnum2+=num[i];
		i--;
	//	console.log("num1[sqr]="+imnum1);
	}
	var revercenum="";
	for(var k=imnum2.length-1;k>=0;k--)
		revercenum+=imnum2[k];
	imnum2=revercenum;
//	console.log("num[^]="+imnum1+"^"+imnum2);
//	console.log(num.replace(""+imnum2+"^"+imnum1,"Math.pow("+imnum2+","+imnum1+")"));
	return (num.replace(""+imnum2+"^"+imnum1,"Math.pow("+imnum2+","+imnum1+")"));
}
function checkOp(a){
	switch(a){
		case "+":
		case "-":
		case "*":
		case "^":
		case "/":
		return true;
		break;
		default:
		return false;
		break;
	}
}