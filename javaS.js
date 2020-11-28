
window.addEventListener( "load", start, false );
window.addEventListener( "mouseover", mouseOver, false );
window.addEventListener( "mouseout", mouseOut, false );
var imgG;
var cou=0;

function start()
{
  imgG = document.getElementById( "img" );
      imgG.addEventListener( "click", ch, false );
	  
	 	  
}
function ch()
{

cou++;
if(cou==1)
{
var randomVar = Math.floor( 1 + Math.random() * 2 );
if(randomVar== 1)
{
imgG.setAttribute("src", "cong.png");
 document.getElementById("code").innerHTML +="<label> Code </label>  <input  class='inp size' type='text' name='codeD'>" ;
}

else
imgG.setAttribute("src", "sorry.png");

}
}
function mouseOver( e )
{
   if ( e.target.tagName.toLowerCase() == "label" )
      e.target.setAttribute( "style", "color:blue; " );
}
function mouseOut( e )
{
   if ( e.target.tagName.toLowerCase() == "span" )
      e.target.setAttribute( "style", "font-size:12px;  color:black; " );
} 
