// document.querySelector("button").addEventListener("click",handleClick);
//
// function handleClick(){
//   alert("I Got Clicked");
// }
// //document.querySelector("button").addEventListener("click", function()
// {
//   alert("I Got Clicked");
// }
// );
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(var a = 0; a<numberOfDrumButtons;a++)
{
  document.querySelectorAll(".drum")[a].addEventListener("click",function()
{
//  alert("Ï clicked");
// var name  = new Audio("sounds/crash.mp3");
// name.play();
// this can be done by switch case also but We did it by if-else
    var x = this.innerHTML;
    makesound(x);
    buttonAnimation(x);

});
}
document.addEventListener("keypress",function(){
  makesound(event.key);
  buttonAnimation(event.key);
})
function makesound(key)
{

var b = key;
if(b=="w")
{
  var name  = new Audio("css/tom-1.mp3");
   name.play();
}
if(b=="a")
{
  var name  = new Audio("css/tom-2.mp3");
   name.play();
}
if(b=="s")
{
  var name  = new Audio("css/tom-3.mp3");
   name.play();
}
if(b=="d")
{
  var name  = new Audio("css/tom-4.mp3");
   name.play();
}
if(b=="j")
{
  var name  = new Audio("css/crash.mp3");
   name.play();
}
if(b=="k")
{
  var name  = new Audio("css/kick-bass.mp3");
   name.play();
}
if(b=="l")
{
  var name  = new Audio("css/snare.mp3");
   name.play();
}
}
function buttonAnimation(ButtonKey)
{
          var activeButton = document.querySelector("." + ButtonKey);
          activeButton.classList.add("pressed");
          setTimeout(function()
        {
          activeButton.classList.remove("pressed");
        },200)
}
