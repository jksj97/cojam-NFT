$(document).ready(function(){

    setInterval(function() { /* setInterval 시작 */

    var boxIn = $('.wrap01 ul'); /* boxIn 변수에 .boxIn ul 요소 저장 */
    
    var boxRow = $('.wrap01 ul li:first'); /* boxRow 변수에 첫번째 .boxIn ul li 요소 저장  */
    
    var ARea = function(){ /* ARea 변수에 함수 저장 */
        boxRow.appendTo(boxIn).show(900); /* boxRow 요소를 boxIn 요소 마지막에 추가하며 show 메서드 적용합니다. */
    };
    
    $(boxRow).hide(900, ARea); /* boxRow 요소가 300ms로 숨겨지고나면 변수 ARea에 저장 된 콜백 함수가 실행됩니다. */        

},9000);

// 02
setInterval(function() { /* setInterval 시작 */

var boxIn = $('.wrap02 ul'); /* boxIn 변수에 .boxIn ul 요소 저장 */

var boxRow = $('.wrap02 ul li:first'); /* boxRow 변수에 첫번째 .boxIn ul li 요소 저장  */

var ARea = function(){ /* ARea 변수에 함수 저장 */
    boxRow.appendTo(boxIn).show(600); /* boxRow 요소를 boxIn 요소 마지막에 추가하며 show 메서드 적용합니다. */
};

$(boxRow).hide(600, ARea); /* boxRow 요소가 300ms로 숨겨지고나면 변수 ARea에 저장 된 콜백 함수가 실행됩니다. */        

},6000);

// 03
setInterval(function() { /* setInterval 시작 */

var boxIn = $('.wrap03 ul'); /* boxIn 변수에 .boxIn ul 요소 저장 */

var boxRow = $('.wrap03 ul li:first'); /* boxRow 변수에 첫번째 .boxIn ul li 요소 저장  */

var ARea = function(){ /* ARea 변수에 함수 저장 */
    boxRow.appendTo(boxIn).show(900); /* boxRow 요소를 boxIn 요소 마지막에 추가하며 show 메서드 적용합니다. */
};

$(boxRow).hide(900, ARea); /* boxRow 요소가 300ms로 숨겨지고나면 변수 ARea에 저장 된 콜백 함수가 실행됩니다. */        

},9000);


// 04
setInterval(function() { /* setInterval 시작 */

var boxIn = $('.wrap04 ul'); /* boxIn 변수에 .boxIn ul 요소 저장 */

var boxRow = $('.wrap04 ul li:first'); /* boxRow 변수에 첫번째 .boxIn ul li 요소 저장  */

var ARea = function(){ /* ARea 변수에 함수 저장 */
    boxRow.appendTo(boxIn).show(600); /* boxRow 요소를 boxIn 요소 마지막에 추가하며 show 메서드 적용합니다. */
};

$(boxRow).hide(600, ARea); /* boxRow 요소가 300ms로 숨겨지고나면 변수 ARea에 저장 된 콜백 함수가 실행됩니다. */        

},6000);

// 05
setInterval(function() { /* setInterval 시작 */

var boxIn = $('.wrap05 ul'); /* boxIn 변수에 .boxIn ul 요소 저장 */

var boxRow = $('.wrap05 ul li:first'); /* boxRow 변수에 첫번째 .boxIn ul li 요소 저장  */

var ARea = function(){ /* ARea 변수에 함수 저장 */
    boxRow.appendTo(boxIn).show(900); /* boxRow 요소를 boxIn 요소 마지막에 추가하며 show 메서드 적용합니다. */
};

$(boxRow).hide(900, ARea); /* boxRow 요소가 300ms로 숨겨지고나면 변수 ARea에 저장 된 콜백 함수가 실행됩니다. */        

},9000);


// 06
setInterval(function() { /* setInterval 시작 */

var boxIn = $('.wrap06 ul'); /* boxIn 변수에 .boxIn ul 요소 저장 */

var boxRow = $('.wrap06 ul li:first'); /* boxRow 변수에 첫번째 .boxIn ul li 요소 저장  */

var ARea = function(){ /* ARea 변수에 함수 저장 */
    boxRow.appendTo(boxIn).show(600); /* boxRow 요소를 boxIn 요소 마지막에 추가하며 show 메서드 적용합니다. */
};

$(boxRow).hide(600, ARea); /* boxRow 요소가 300ms로 숨겨지고나면 변수 ARea에 저장 된 콜백 함수가 실행됩니다. */        

},6000);






});

