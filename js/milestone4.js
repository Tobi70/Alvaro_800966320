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

function playshow(){
    var timer = setInterval(edit,5000);
    let blogs =  ["Risus sed pede pede, praesent arcu ante scelerisque ipsum, aliquam mollis, volutpat dui. Consectetuer at. " +
    "Sed odio. Neque dui hac augue amet gravida molestie, in suscipit velit malesuada vehicula, luctus phasellus at vestibulum commodo eu. " +
    "Dui nullam sodales quis mus gravida ornare, non malesuada id ut ultricies nulla, imperdiet adipiscing sem nisl dui egestas dolor.",
        "ssa molestie pellentesque sociosqu sem nullam. Ligula sem imperdiet eu quisque tempor neque. " +
    "Sit pede luctus dictumst velit, blandit ornare quod commodo convallis sed lacus, laoreet varius mauris vel pulvinar nam, volutpat vestibulum et felis, elit elementum. " +
    "Ornare felis sed vel, tellus mollis tellus faucibus enim placerat, duis fames facilisis dolor, quam molestie, sollicitudin ","ac sit vitae, suspendisse nunc imperdiet neque, sit ac amet semper malesuada, " +
        "diam et iaculis aliquam est elit. " +
        "Neque ut pellentesque vivamus risus, auctor at, magnis dictumst at lectus aenean vulputate ut, amet nec scelerisque ut, ante a ac pulvinar. Dignissim vestibulum duis, donec etiam purus turpis eget tincidunt leo, nunc arcu in in est nisl, " +
        "auctor magna velit nunc.\n" +
        "\n"];
    let counter;

    function edit(){

        let content = document.getElementsByClassName("grid-item");
        let blogcounter;
        //getting things from content
        // changing them
        //and let it to continue to play through the blogs[] until it hits the stop button
        for(i=0; i < blogs.length; i++){
            counter = i;
            content.innerHTML = blogs[i];
            if(counter > blogs){
                i= 0;//// YOURRRR DOING IT CONTINUE ??? Cause i gave up to live stream lmao
            }
        }




    }

}




