//OBJECTS IN JAVASCRIPT


var storeManager = {}                 //Approach 1
storeManager.rangeTilesperturn = 4;
storeManager.socialSkills = 50;
storeManager.streetSmarts = 50;
storeManager.health = 30;

var assistantManager = {             //Approach 2
  rangeTilesperturn: 2,
  socialSkills: 30,
  streetSmarts: 30,
  health: 40,
}
assistantManager.nextAchievement = "get promoted "
console.log(assistantManager.health);
console.log(storeManager);

var house2 = {}
house2["rooms"] = 4;                 //Approach 3
house2["color"] = "pink";
house2["priceUSD"] = 12345;
console.log(house2);


var arrofKeys=["speed","altitude","color"];
var drone={
  speed:100,
  altitude:200,
  color:"red",
}
for(var i=0;i<arrofKeys.length;i++){
  console.log(drone[arrofKeys[i]]);  // bracket notation can evaluate expressions
}