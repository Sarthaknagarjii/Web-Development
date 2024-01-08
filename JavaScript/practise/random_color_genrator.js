let btn = document.querySelector("button");

btn.addEventListener("click",function(){
    
    let h3 = document.querySelector("h3");
    let randomcolor= getRandomcolor();
    h3.innerText = randomcolor;
      
    let div = document.querySelector("div");
    div.style.backgroundcolor = randomcolor;

    console.log = ("Updated color");
});

function getRandomcolor(){
    let red = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);

    let color = `rgb(${red},${blue},${green})`;
    return color;
}

