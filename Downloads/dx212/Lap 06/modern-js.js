function greet (name, fraculty) {
    return "สวัสดี"+"ชื่อ"+"จากคณะ"+ faculty+"!";
}

const greet = (name, faculty) => `สวัสดี ${name} จากคณะ ${faculty}!`;

console.log(greet("Pong","IT"));
console.log(greet_modern("Pong","IT"));

const student = { name: "ฟ้า", faculty: "CITU", year: 2 };

const updated = { ...student, year: 3 };

console. log( student, updated) ;
const scores = [90, 80, 70, 60, 501;
const buses = [
{ route: "NGV-1", passengers: 45, late:false },
{ route: "NGV-2", passengers: 62, late: true },
{ route: "NGV-3" , passengers: 38, late: true },
{ route: "NGV-4", passengers: 51, late: false },
];
for (let i = 0; i < buses.length; i++) {
  console.log(buses[i].route,buses[i].passengers,buses[i].late);
}
for (const bus of buses) {
    
}
const routes = buses.map(bus => bus.route);

console.log(routes);

const lateBuses=buses.filter(({late}) => late==true);
const heavyBuses = buses.filter (({passenger}) => passenger >50);

console. log(lateBuses) ;
console. log (heavyBuses);

const totalPassengers = buses. reducel (
    (total, {passengers }) =>total + passengers,
    0

) ;
console. log(totalPassengers) ;
console.log(totalPassengers0fHeavyBuses);