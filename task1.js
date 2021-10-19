// document.querySelector("button")
// const buttons = document.querySelector("button")
// buttons.class = "boutton1";
// buttons.innerHTML = "boutton1";
// console.log(buttons);

//////// POINT 1 IS DONE

function changeSize(){
    document.getElementById("head").style.fontSize = "100px";
    }


function  changeStyle(){
    document.getElementById("paragraph").style.fontFamily = "Cursive";
}


function  changeBackground(){
 document.getElementById("paragraph").style.backgroundColor = "red";
}



 function  hideImage(){
     document.getElementById("image").style.display = 'none';
}




let item = 0 ;
let imageList = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrFdyvxOCnjiRfwY3-93uU0hBC_k4pnKW3uuJKO_cE0J5gF91oPszBs974ipawdoqMKsY&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrFdyvxOCnjiRfwY3-93uU0hBC_k4pnKW3uuJKO_cE0J5gF91oPszBs974ipawdoqMKsY&usqp=CAU"]
 function  alternateImage(){
    item+=1 ;
    if (item == imageList.length) {
        item = 0;
     }
     const image1 = document.getElementById("image");
     image1.src = imageList[item];
    }
    