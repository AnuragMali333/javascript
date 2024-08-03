var car ={}
car .mileage= 98765;
car.color="red"
car.turnTheKey=function(){
  console.log("The engine is running")
}
console.log(car)
car.lightsOn=function(){
  console.log("The lights are on.")
}
car.turnTheKey();
car.lightsOn();