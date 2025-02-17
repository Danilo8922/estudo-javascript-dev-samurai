// Var

var a = 10
console.log("A", a)

{
    console.log("A", a)
    a  = 20
    
    var b = 30
}

console.log("A", a)
console.log("B", b)

// Let

let c = 20
console.log("C", c)

{
    console.log("C", c)
    c  = 40
    
    let d = 60
}

console.log("C", c)
console.log("D", d)

// Const

const d = 20
console.log("C", c)

{
    console.log("C", c)
    d  = 40
    
    const e = 60
}

console.log("C", c)
console.log("D", d)
