const selectedElement = document.getElementsByClassName("scr_number");
var screen_text = "";
const text_length = screen_text.length;

function show(value){
if (screen_text==0) 
{
screen_text="";
}
if(value==='=')
{
screen_text = eval(screen_text);
}
else if (value==='ac') 
{
screen_text="0";
}
else if (value==='c') 
{
screen_text=screen_text.slice(0,text_length-1);
}
else
{
screen_text=screen_text+value+"";
}

selectedElement[0].innerHTML= screen_text;
}