let elm = document.querySelector("input");
let dataSet = elm.dataset;

if(dataSet && dataSet.maskChar){
    elm.value = dataSet.maskChar;
    elm.addEventListener("keyup", handleMasking);
    elm.addEventListener("focus", function(){
        elm.f
    });
}

function handleMasking(e){
    console.log(e)
}