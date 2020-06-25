
let i = 0
let counter = 0;

let images = [
    "url(../img/back1.jpg)",
    "url(../img/back2.jpg)",
    "url(../img/back3.jpg)",
];

function switchBackground(){
    let element = document.getElementById("div1");



    if(i>=images.length) {
        if(images.length = i) {
            i = 0;
        }
        return;
    }
    element.style.backgroundImage = images[i++];


}
function fontSizer(){
    let reader = document.getElementById("myRange").value;
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = reader;

    slider.oninput = function() {
        output.innerHTML = this.value;

    }
    console.log(reader);

    let blog = document.getElementById("size")

    blog.style.fontSize = reader + "px";
}



let $array = []

$('#blog').each(function(entry){
    $array.push(entry);
})

function playshow() {

    console.log($array);


/*    slideshow = setInterval(function (){
        blog[counter].style.display = "block"
        counter++;
        if(counter > blog.length) counter = 0;
        console.log(counter);

    },5000);*/



}

function stop(){
    clearInterval(slideshow);

}