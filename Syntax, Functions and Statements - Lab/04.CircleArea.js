function calc(input){
    if (Number.isFinite(input)){
        console.log((Math.PI * Math.pow(input, 2)).toFixed(2));
    } else{
        console.log(`We can not calculate the circle area, because we receive a ${typeof(input)}.`)
    }
}

calc('name');