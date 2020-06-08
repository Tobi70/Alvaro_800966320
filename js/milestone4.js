function background1() {
    console.log("printed in background1");
    let element = document.getElementById("div1");
    element.style.backgroundImage = "url(../img/back1.jpg)";
    element.style.backgroundSize = "cover";


}

function background2() {
    console.log("printed in background2");
    let element = document.getElementById("div1");
    element.style.backgroundImage = "url(../img/back2.jpg)";
    element.style.backgroundSize = "cover";


}

function background3() {
    console.log("printed in background3");
    let element = document.getElementById("div1");
    element.style.backgroundImage = "url(../img/back3.jpg)";
    element.style.backgroundSize = "cover";


}

function fontSize(){
    let font = document.getElementById("size");
    if(font.style.fontSize === "18px") {
        font.style.fontSize = "24px";
    }else if(font.style.fontSize !== "18px"){
            font.style.fontSize = "18px";
    }else{
            font.style.fontSize = "18px";
        }

}