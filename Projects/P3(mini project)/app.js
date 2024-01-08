let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");


btn.addEventListener("click",function () {
    let item = document.createElement("li");
    item.innerText = inp.value;
    
    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("Delete");
    item.appendChild(delbtn);

    ul.appendChild(item);
    console.log(inp.value);
    inp.value = "";

})

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("Deleted");
    }
    

});

// let delbtns = document.querySelectorAll(".Delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click", function(){
//        let par = this.parentElement;
//        console.log(par);
//        par.remove();

//     }); 
// }
