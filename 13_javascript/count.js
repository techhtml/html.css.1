/*
 * 버튼을 누르면 (1)
 * 숫자가 오른다 (2)
 */

/*
 * document
 * - 문서를 나타내는 자바스크립트 객체
 * - 모든 웹페이지는 기본적으로는 문서다
 * querySelector
 * - HTML 요소를 CSS 셀렉터를 이용해서 JavaScript에서 활용할 수 있도록 하는 것
 * - 해당 셀렉터가 나타내는 요소가 여러개인 경우, 마크업상 가장 첫번째에 위치한 걸 가져옴
 * - (버튼을)
 */
var btn = document.querySelector("button");
var num = 0;

/*
 * addEventListener
 * - 해당 요소에 이벤트를 부여함
 * - 이벤트를 부여한다?
 * - 클릭(이벤트)을 하면 XXX을 해라.
 * - 이런 행위 : function : 동작
 */
btn.addEventListener("click", function() {
  /*
	 * 동작 : function
	 * function 내부에는 실제로 행해야하는 일에 대해 기술
	 * 중괄호 사이에 작성을 합니다
	 */
	 num = num + 1;
	 console.log(num);
});








/**/
