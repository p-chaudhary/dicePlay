//alert("Hello");
//var name=prompt("Enter your name!");
var r1=Math.floor(Math.random() *6) + 1;
 // random number 2
var r2=Math.floor(Math.random() *6) + 1;
//alert(r1);
var randomImage1="dice" + r1 + ".png";
var randomImage2="dice" + r2 + ".png";

var randomImageSource1="images/" + randomImage1;
var randomImageSource2="images/" + randomImage2;

var image1=document.querySelectorAll("img")[0];
var image2=document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSource1);
image2.setAttribute("src", randomImageSource2);

//document.querySelectorAll("p")[0].innerHTML=(name);

if(r1>r2)
{
  document.querySelector("h1").innerHTML=("You wins🚩");
}
else if(r2>r1)
{
  document.querySelector("h1").innerHTML=("Computer wins");
}
else
{
  document.querySelector("h1").innerHTML=("Draw");
}
