importLib("ToolType", "*");
importLib("energylib", "*");
importLib("SoundLib", "*");
importLib("RadiationCore", "*");

// energy (Rad)
var Rad = EnergyTypeRegistry.assureEnergyType("Eu", 1);

//Sounds

var sndWrench = new Sound("tools_sounds/", "wrench.ogg");
var sndSiren = new Sound("machines_sounds/", "siren.mp3");
//var relAk74 = new Sound("guns_sounds/", "AK74_reload.ogg");
var sndAK74 = new Sound("guns_sounds/", "AK74_shoot.ogg");


// import values, that work faster
var MobEffect = Native.PotionEffect;
var Enchantment = Native.Enchantment;
var BlockSide = Native.BlockSide;
var EntityType = Native.EntityType;


Callback.addCallback("LevelLeft",function(){
	sndWrench.resetSound();
	sndSiren.resetSound();
});


//ArrowRemove

var ARROW = [];

Callback.addCallback("EntityAdded",function(entity){
	if (Entity.getType(entity) == 80){
		ARROW.push(entity);
}});


Callback.addCallback("tick",function(){
for(var iarr = 0; iarr < ARROW.length; iarr++) {
	if(Entity.getVelocity(ARROW[iarr]).x == 0 && Entity.getVelocity(ARROW[iarr]).y == 0 && Entity.getVelocity(ARROW[iarr]).z == 0 && Entity.getType(ARROW[iarr]) == 80) {
		Entity.remove(ARROW[iarr]); 	
	}
}});

var guiScale = 3.5;

// API
function addShapelessRecipe(result, source){
	var ingredients = [];
	for(var i in source){
		var item = source[i];
		for(var n = 0; n < item.count; n++){
			ingredients.push(item);
		}
	}
	Recipes.addShapeless(result, ingredients);
}

//Random

function randomInt(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


function reset(){
	return sndSiren.resetSound();
}