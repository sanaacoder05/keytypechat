var canvas = document.getElementById("myCanvas");
//i am sorry to say that i could only code for add mam :( //
ctx = canvas.getContext("2d");
img_width = 300;
img_height = 100;

var img_image = "";

img_x = 100;
img_y = 100;

function add() {
	imgTag = new Image(); //defining a variable with a new image
	imgTag.onload = uploadimg; // setting a function, onloading this variable
	imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown" , my_ALPHA);

function my_ALPHA(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		{
			aplhabetkey();
		document.getElementById("d1").innerHTML="You pressed Alphabet";
		console.log("alphabet key");}

}

window.addEventListener("keydown" , my_otherkey);

function my_otherkey(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	if(e.shiftKey == true) 
		{
		otherkey()
		document.getElementById("d1").innerHTML="You pressed Other key";
		console.log("other key");
	}

}
window.addEventListener("keydown" , my_num);

function my_num(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=(48) && keyPressed<=57))
		{
			numberkey()
		document.getElementById("d1").innerHTML="You pressed Number key";
		console.log("number key");
	}

}

window.addEventListener("keydown" , my_Arrowkey);

function my_Arrowkey(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=(37) && keyPressed<=40))
		{
			arrowkey()
		document.getElementById("d1").innerHTML="You pressed Arrow key";
		console.log("Arrow key");
	}

}

window.addEventListener("keydown" , my_specialkey);

function my_specialkey(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=(17) && keyPressed<=27))
		{
			specialkey()
		document.getElementById("d1").innerHTML="You pressed Special key";
		console.log("special key");
	}

}




function aplhabetkey()
{
	img_image = "Alpkey.png";
	add();

}
function numberkey()
{
	img_image = "numkey.png";
	add();	
}
function arrowkey()
{
	img_image = "Arrkey.png";
	add();
}
function specialkey()
{
	img_image = "spkey.png";
	add();    	
}
function otherkey()
{
	img_image = "otherkey.png";
	add();
}
