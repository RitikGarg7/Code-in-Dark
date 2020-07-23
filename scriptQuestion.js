
    // const hackerEarth = require('hackerearth-node')
    //
    // var hack=new hackerEarth(
    //     'b001908b8e0d10795a6908b8a506a4f555605090'
    // );






function onClick() {
    if(clicks<3){
        document.getElementsByClassName('CodeMirror')[0].style.color= 'black';
        setTimeout(function () {
            document.getElementsByClassName('CodeMirror')[0].style.color= 'white';
        },5000)
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    }
};
function onSubmit() {
    if(done==false){
        done=true;
        var code=editor.getValue();
        console.log(code);

    }
}


//blocking inspect element via f12
$(document).keydown(function(e){
    if(e.which === 123){
        return false;
    }
});

//blocking inspect element via right click
$(document).bind("contextmenu",function(e) {
    e.preventDefault();
});

//blocking inspect element by disabling the content of body while inspect element is opened
var currentHtmlContent;
var element = new Image();
var elementWithHiddenContent = document.querySelector("#element-to-hide");
var innerHtml = elementWithHiddenContent.innerHTML;
element.__defineGetter__("id", function() {
    currentHtmlContent= "";
});

setInterval(function() {
    currentHtmlContent= innerHtml;
    console.log(element);
    console.clear();
    elementWithHiddenContent.innerHTML = currentHtmlContent;
}, 1000);

