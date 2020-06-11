let i = 0, images = [
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


let counter = 0;
let slideshow;
function playshow() {

    let content1 = document.getElementById("blog");
    let content2 = document.getElementById("blog2");
    let content3 = document.getElementById("blog3");


     slideshow = setInterval(function (){


        switch (counter) {
            case 0:
                content1.style.display = "block";
                content2.style.display = "none";
                content3.style.display = "none";
                counter++
                break;
            case 1:
                content1.style.display = "none";
                content2.style.display = "block";
                content3.style.display = "none";
                counter++;
                break;
            case 2:
                content1.style.display = "none";
                content2.style.display = "none";
                content3.style.display = "block";
                counter = 0;
                break;

        }
},5000);


}


function stop(){
    clearInterval(slideshow);

}



