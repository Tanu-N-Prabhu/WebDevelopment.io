<!-- This is the javascript code for the slider of dark mode -->    
function myFunction() 
{
var element = document.body;
element.classList.toggle("dark-mode");
}


var app = document.getElementsByTagName("BODY")[0];
if (localStorage.lightMode == "dark") 
{
app.setAttribute("data-light-mode", "dark");
}


function toggle_light_mode() 
{
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


document.getElementById('dark-mode-btn').addEventListener('click', function (e) 
{
const toggler = document.body;
toggler.classList.toggle('dark-mode');
const target = e.target;
target.classList.toggle('fa-moon');
target.classList.toggle('fa-sun');
});

$.fn.jQuerySimpleCounter = function( options ) {
var settings = $.extend({
start:  0,
end:    100,
easing: 'swing',
duration: 400,
complete: ''
}, options );

var thisElement = $(this);

$({count: settings.start}).animate({count: settings.end}, {
duration: settings.duration,
easing: settings.easing,
step: function() {
var mathCount = Math.ceil(this.count);
thisElement.text(mathCount);
},
complete: settings.complete
});
};


$('#number1').jQuerySimpleCounter({end: 52,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 789883,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 341545,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 1047,duration: 2500});




