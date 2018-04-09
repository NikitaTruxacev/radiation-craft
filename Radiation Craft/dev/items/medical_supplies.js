
IDRegistry.genItemID("tablet");
IDRegistry.genItemID("expTablet");
IDRegistry.genItemID("uzf");
IDRegistry.genItemID("antiradin");
IDRegistry.genItemID("stimulant");
//IDRegistry.genItemID("blocker");


Item.createFoodItem("tablet", "Tablet", {name: "tablet", data: 1}, {food: 0});
Item.createFoodItem("expTablet", "Experimental tablet", {name: "tablet", data: 0}, {food: 0});
Item.createFoodItem("uzf", "UnZombieFicator", {name: "tablet", data: 2}, {food: 0});
Item.createFoodItem("antiradin", "Antiradin", {name: "antiradin", data: 0}, {food: 0});
Item.createFoodItem("stimulant", "Stimulant", {name: "stimulant", data: 0}, {food: 0,stack: 1});
//Item.createFoodItem("blocker", "Blocker", {name: "blocker", data: 0}, {food: 0,stack: 1});


Item.setProperties(ItemID.tablet, { 

"category": "Miscellaneous",

"use_animation": "eat",

"use_duration": 5,

"max_stack_size": 64,

"foil": false,

"food": {

"nutrition": 0, 

"saturation_modifier": "supernatural", 

"is_meat": false }});

Item.setProperties(ItemID.expTablet, { 

"category": "Miscellaneous",

"use_animation": "eat",

"use_duration": 5,

"max_stack_size": 64,

"foil": false,

"food": {

"nutrition": 0, 

"saturation_modifier": "supernatural", 

"is_meat": false }});

Item.setProperties(ItemID.uzf, { 

"category": "Miscellaneous",

"use_animation": "eat",

"use_duration": 5,

"max_stack_size": 64,

"foil": false,

"food": {

"nutrition": 0, 

"saturation_modifier": "supernatural", 

"is_meat": false }});

Item.setProperties(ItemID.antiradin, { 

"category": "Miscellaneous",

"use_animation": "drink",

"use_duration": 10,

"max_stack_size": 64,

"foil": false,

"food": {

"nutrition": 0, 

"saturation_modifier": "supernatural", 

"is_meat": false }});

Item.setProperties(ItemID.stimulant, { 

"category": "Miscellaneous",

"use_animation": "drink",

"use_duration": 10,

"max_stack_size":1,

"foil": false,

"food": {

"nutrition": 0, 

"saturation_modifier": "supernatural", 

"is_meat": false }});

/*
Item.setProperties(ItemID.blocker, { 

"category": "Miscellaneous",

"use_animation": "drink",

"use_duration": 10,

"max_stack_size":1,

"foil": false,

"food": {

"nutrition": 0, 

"saturation_modifier": "supernatural", 

"is_meat": false }});*/


/*
IDRegistry.genItemID("flask");
Item.createItem("flask", "Фляга", {name: "flask", data: 0},{stack: 1});

Recipes.addShaped({id: ItemID.flask, count: 1, data: 0}, ["qoq","oao","qoq"], ['a', 374, 0,'o', 265, 0]);
*/



Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.tablet){
	Entity.healEntity(Player.get(), 4);
}
if(Player.getCarriedItem().id==ItemID.expTablet){
	Entity.addEffect(Player.get(), MobEffect.movementSpeed, 1200, 4, false, false);
	Entity.addEffect(Player.get(), MobEffect.digSpeed, 1200, 4, false, false);
	Entity.addEffect(Player.get(), MobEffect.regeneration, 1200, 4, false, false);
	Entity.addEffect(Player.get(), MobEffect.jump, 1200, 4, false,false);
	Entity.addEffect(Player.get(), MobEffect.damageResistance, 1200, 4, false, false);
	Entity.addEffect(Player.get(), MobEffect.fireResistance, 1200, 4, false, false);
	Entity.addEffect(Player.get(), MobEffect.waterBreathing, 1200, 4, false, false);
	Entity.addEffect(Player.get(), MobEffect.invisibility, 1200, 4, false, false);
	Entity.addEffect(Player.get(), MobEffect.nightVision, 1200, 4, false, false);
	Entity.addEffect(Player.get(), MobEffect.damageBoost, 1200, 4, false, false);
}
if(Player.getCarriedItem().id==ItemID.uzf){
	ZDise = 0;
}
if(Player.getCarriedItem().id==367){
	ZDise += 1;
}});
