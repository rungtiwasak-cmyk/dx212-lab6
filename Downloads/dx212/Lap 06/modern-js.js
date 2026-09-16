function greet (name, fraculty) {
    return "สวัสดี"+"ชื่อ"+"จากคณะ"+ faculty+"!";
}

const greet = (name, faculty) => `สวัสดี ${name} จากคณะ ${faculty}!`;

console.log(greet("Pong","IT"));
console.log(greet_modern("Pong","IT"));