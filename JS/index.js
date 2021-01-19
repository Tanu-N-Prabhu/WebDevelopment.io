
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}


var app = document.getElementsByTagName("BODY")[0];
if (localStorage.lightMode == "dark") {
    app.setAttribute("data-light-mode", "dark");
}


function toggle_light_mode() {
    var app = document.getElementsByTagName("BODY")[0];
    if (localStorage.lightMode == "dark") 
    {
    localStorage.lightMode = "light";
    app.setAttribute("data-light-mode", "light");
    } 
    else 
    {
    localStorage.lightMode = "dark";
    app.setAttribute("data-light-mode", "dark");
    }
    console.log("lightMode = " + localStorage.lightMode);
}


document.getElementById('dark-mode-btn').addEventListener('click', function (e) {
    const toggler = document.body;
    toggler.classList.toggle('dark-mode');
    const target = e.target;
    target.classList.toggle('fa-moon');
    target.classList.toggle('fa-sun');
});


$(document).ready(function() {

    typing( 0, $('.typewriter-text').data('text') );

    function typing( index, text ) {

    var textIndex = 1;

    var tmp = setInterval(function() {
    if ( textIndex < text[ index ].length + 1 ) {
    $('.typewriter-text').text( text[ index ].substr( 0, textIndex ) );
    textIndex++;
    } else {
    setTimeout(function() { deleting( index, text ) }, 2000);
    clearInterval(tmp);
    }

    }, 150);

}

function deleting( index, text ) {

    var textIndex = text[ index ].length;

    var tmp = setInterval(function() {

    if ( textIndex + 1 > 0 ) {
    $('.typewriter-text').text( text[ index ].substr( 0, textIndex ) );
    textIndex--;
    } else {
    index++;
    if ( index == text.length ) { index = 0; }
    typing( index, text );
    clearInterval(tmp);
    }

    }, 150)

    }

});

    
$(function(){
  $("#nav-placeholder").load("navBar.html");
});
