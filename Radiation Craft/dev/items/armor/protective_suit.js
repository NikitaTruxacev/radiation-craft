IDRegistry.genItemID("ProtectiveHelmet");
IDRegistry.genItemID("ProtectiveChestplate");
IDRegistry.genItemID("ProtectiveLeggings");
IDRegistry.genItemID("ProtectiveBoots");


Item.createArmorItem("ProtectiveHelmet", "Protective helmet", {name: "protective_helmet"}, {type: "helmet", armor: 4, durability: 70, texture: "armor/protective_helmet.png", isTech: false});
Item.createArmorItem("ProtectiveChestplate", "Protective chestplate", {name: "protective_chestplate"}, {type: "chestplate", armor: 4, durability: 70, texture: "armor/protective_chestplate.png", isTech: false});
Item.createArmorItem("ProtectiveLeggings", "Protective leggings", {name: "protective_leggings"}, {type: "leggings", armor: 4, durability: 70, texture: "armor/protective_leggings.png", isTech: false});
Item.createArmorItem("ProtectiveBoots", "Protective boots", {name: "protective_boots"}, {type: "boots", armor: 4, durability: 70, texture: "armor/protective_boots.png", isTech: false});


Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: ItemID.ProtectiveHelmet, count: 1, data: 0}, ["сaс","obo","oco"], ['a', 351, 14, 'b', 20, 0,'c', ItemID.plateLead, 0, 'o', ItemID.rubber, 0]);
	Recipes.addShaped({id: ItemID.ProtectiveChestplate, count: 1, data: 0}, ["o o","aca","oao"], ['c', 351, 14, 'o', ItemID.rubber, 0,'a',  ItemID.plateLead,0]);
	Recipes.addShaped({id: ItemID.ProtectiveLeggings, count: 1, data: 0}, ["сaс","oсo","o o"], ['a', 351, 14, 'o',ItemID.rubber, 0,'с',  ItemID.plateLead, 0]);
	Recipes.addShaped({id: ItemID.ProtectiveBoots, count: 1, data: 0}, ["","a a","oco"], ['c', 35, 0 ,'o',ItemID.rubber, 0,'a',  ItemID.plateLead, 0]);
});