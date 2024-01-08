function random() {
    let startrange = (prompt("Enter the starting number : "));
    let endrange = (prompt("Enter the ending number : "));
    let rand = endrange - startrange
    let genrate = Math.floor(Math.random() *(endrange-startrange)) + startrange;
    console.log(genrate);
}

random();
