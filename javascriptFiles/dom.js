
var checkDiv = document.getElementById("txtautocomplete");

checkDiv.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        changeCheckBoxDiv(e);
    }
});

checkDiv.addEventListener("click", function (e) {
    
    if ( e.which===1) {
        changeCheckBoxDiv(e);
        }
    }
);

function changeCheckBoxDiv(e){
    document.getElementById("checkDiv").className = "checkDivStyle" ;
    
}
