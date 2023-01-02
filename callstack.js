function first() {
    console.log("This is first");
    second()   
}

function second() {
    console.log("This is second");
    third()
}

function third() {
    console.log("This is third")
}

first();