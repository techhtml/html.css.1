// modal

// 이벤트
// 버튼을 클릭하는 행위, 마우스를 캔버스 위에서 움직이는 행위

// 모달
// 1) 무언가(버튼, 링크)를 클릭했을 때
// 2) 바탕이 dimmed 되며
// 3) 좌측으로부터
// 4) 모달레이어가
// 5) 1초동안 나온다.

// li 요소를 클릭하면
// querySelectorAll, 셀렉터에 맞는 모든 요소, 배열로


// for문

// for(초기값, 조건값, 증감값) {
//
// }

// 2. 바탕이 dimmed 되며
// 2-1. 바탕 dimmed를 누르면 dimmed가 꺼짐
// 2-2. ESC 키를 누르면 dimmed가 꺼짐
var lists = document.querySelectorAll(".pizza-list li");
var dimmedLayer = document.querySelector(".dimmed");
var contentLayer = document.querySelector(".layer");

var bgFadeIn = function() {
	dimmedLayer.className = "dimmed dimmed-on";
}
var bgFadeOut = function() {
	dimmedLayer.className = "dimmed dimmed-off";
}
var layerOn = function() {
	contentLayer.className = "layer layer-on";
}
var layerOff = function() {
	contentLayer.className = "layer layer-off";
}
var onLayer = function() {
	bgFadeIn();
	layerOn();
}
var offLayer = function() {
	bgFadeOut();
	layerOff();
}

// 이벤트 넣는 것
for(var i = 0; i < lists.length; i += 1) {
	var list = lists[i];
	list.addEventListener("click", onLayer)
}

dimmedLayer.addEventListener("click", offLayer);

document.addEventListener("keydown", function(ev) {
	if(ev.key === "Escape") {
		offLayer();
	}
});








//
