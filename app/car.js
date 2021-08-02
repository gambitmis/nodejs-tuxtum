// https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/
console.log("------------------ Start -----------------");
let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    },
    {
        "color": "red",
        "type": "sport",
        "registration": new Date('2018-03-03'),
        "capacity": 5
    }
];

console.log(cars);
console.log("----------------- Original ---------------");

let car = {
    "color": "red",
    "type": "cabrio",
    "registration": new Date('2016-05-02'),
    "capacity": 2
}

cars.unshift(car);
console.log(cars);
console.log("------------------ Shift -----------------");

car = {
    "color": "black",
    "type": "hybrid",
    "registration": new Date('2021-08-02'),
    "capacity": 4
}
cars.push(car);

console.log(cars);
console.log("------------------ Push -----------------");

car = {
    "color": "grey",
    "type": "crossover",
    "registration": new Date('2020-01-01'),
    "capacity": 5
  }
cars.splice(2, 0, car);
console.log(cars);
console.log("------------------ Splice -----------------");

let x = cars.find(x => x.color === "red");
console.log(x);

console.log("------------------ Find -----------------");

let y = cars.find(y => y.color === "red" && y.type === "cabrio");
console.log(x);
console.log("------------------ Find Adv -----------------");

let redCars = cars.filter(car => car.color === "red");
console.log(redCars);
console.log("------------------ Filter -----------------");

cars.splice(1,1);
console.log(cars);
console.log("------------------ Delete -----------------");