/*var mas = ["skin","skin1","skin2","skin3","skin4","skin5"];
var r = random(0, 5); mas[r]*/

IDRegistry.genItemID("eggSurvived");
Item.createItem("eggSurvived", "Survivor spawn egg", {name: "egg_survived", data: 0});

/*
var survivor_entity = MobRegistry.registerEntity("survivor-men"); 
var survivor_texture = new Texture("survived.png").setResolution(64, 32).setPixelScale(1);
var survivor_model = survivor_entity.setRender(human);

survivor_model.setTexture(survivor_texture); 
Entity.setHealth(survivor_entity, 20) ;

survivor_entity.customizeVisual({ 
	getModels: function() {
		return {
			"main": survivor_model
		};
	}
});

survivor_entity.customizeDescription({
	getHitbox: function() {
		return {w: 1, h: 2};
	}
});


Item.registerUseFunction("eggSurvived", function(coords, item, block){
	coords = coords.relative;
	Entity.spawnCustom("survivor-men", coords.x + 0.5, coords.y + 1, coords.z + 0.5);
});

survivor_entity.customizeAI({
	getAITypes: function(){
		return {
			ander: {
				type: EntityAI.Wander,
				priority: 4,
				speed: 1,
				angular_speed: 0.1,
				delay_weigth: 0.2
},

follow: {
	type: EntityAI.Follow,
	priority: 0,
	speed: 0.1,
	rotateHead: true
},

attack: {
	type: EntityAI.Attack,
	priority: 0,
	attack_damage: 6,
	attack_range: 2,
	attack_rate: 50
},

enemy_watcher: {
	type: DC.AI.EnemyWatcher
}};
}}); */