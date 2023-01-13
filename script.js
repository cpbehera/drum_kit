var imgArray = [];
imgArray[0] = "./images/crash.png";
imgArray[1] = "./images/kick.png";
imgArray[2] = "./images/snare.png";
imgArray[3] = "./images/snare.png";
imgArray[5] = "./images/tom1.png";
imgArray[6] = "./images/tom2.png";
imgArray[7] = "./images/tom3.png";

var buttons = document.getElementsByTagName("button");
console.log(buttons[0]);


for(let i = 0;i < imgArray.length;i++){
    buttons[i].style.background =  imgArray[i];
}