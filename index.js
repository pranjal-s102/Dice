var name1=prompt("Enter the name of Player 1");
var name2=prompt("Enter the name of Player 2");
//dice 1 rng
var randomNumber1=Math.floor(Math.random()*6)+1;
var img1="images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",img1);
//dice 2 rng
var randomNumber2=Math.floor(Math.random()*6)+1;
var img2="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",img2);

if(randomNumber1>randomNumber2)
{
  if(name1.length==0)
  {
  document.querySelector("h1").innerHTML="🚩Player 1 wins!";
  }
  else{
    document.querySelector("h1").innerHTML="🚩 "+name1+"  wins!";
  }

}
else  if(randomNumber1<randomNumber2){
  if(name2.length==0)
  {
      document.querySelector("h1").innerHTML="Player 2 wins!🚩";
  }
  else{
      document.querySelector("h1").innerHTML=name2+" wins!🚩";
  }

}
if(randomNumber1==randomNumber2)
{
  document.querySelector("h1").innerHTML="Draw!";
}
