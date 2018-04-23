document.documentElement.style.fontSize = document.documentElement.clientWidth/3.75+"px";
window.onload = function(){
	window.onresize=function(){
		document.documentElement.style.fontSize = document.documentElement.clientWidth/3.75+"px";
	}
}