IDRegistry.genItemID("medicalKit");
Item.createItem("medicalKit", "Medical Kit", {name: "medical_kit", data: 0},{stack: 16});


Recipes.addShaped({id: ItemID.medicalKit, count: 1, data: 0}, ["ooo","oao","ooo"], ['o', 287, 0, 'a', 260, 0]);

Item.setProperties(ItemID.medicalKit, { 

"category": "Miscellaneous",

"use_animation": "eat",

"use_duration": 5,

"max_stack_size": 16,

"foil": false,

"food": {

"nutrition": 0, 

"saturation_modifier": "supernatural", 

"is_meat": false }});



Callback.addCallback("FoodEaten",function(heal, satRatio){
	if(Player.getCarriedItem().id == ItemID.medicalKit){
	Entity.healEntity(Player.get(), 10);
}});