/*var mas = ["skin","skin1","skin2","skin3","skin4","skin5"];
var r = random(0, 5); mas[r]*/

IDRegistry.genItemID("eggSurvived");
Item.createItem("eggSurvived", "Survived spawn egg", {name: "egg_survived", data: 0});


var Survived = MobRegistry.registerEntity("survived");
Survived.customizeEvents({
	tick: function(){
	Entity.setRender(this.entity, 3);//render
	Entity.setSkin(this.entity, "mob/survived.png");//skin
},

attackedBy: function(attacker, amount){
	//sound
}
});

Survived.customizeDescription({
	getHitbox: function(){
	return {w: 1, h: 2}
}
});
Survived.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.09,
angular_speed: 0.1,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.05,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 1,
attack_range: 1,
attack_rate: 30
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg
Item.registerUseFunction("eggSurvived", function(coords, item, block){
	var coords = coords.relative;
	Entity.spawnCustom("survived", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn

/*
Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == Survived){
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, 289, 0, 2);
}
});*/ //droped порох