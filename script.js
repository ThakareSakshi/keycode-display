let keyb=document.getElementById("key");
let codeb=document.getElementById("code");

document.addEventListener('keydown',(e)=>{
    let keytext=e.key;
    console.log(e.key);
    let codetext=e.keyCode;
    var audio = new Audio("./bell.wav");
    audio.play();
    keyb.innerHTML=`YOU PRESSED <SPAN>${keytext}</SPAN>`;
    codeb.innerHTML=`<span>${codetext}</span>`;
    codeb.style.fontSize=30+"px";
    codeb.style.padding=30+"px";
    // codeb.style.width=200+"px";
    codeb.style.color="orange";
    
})