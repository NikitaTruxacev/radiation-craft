IDRegistry.genItemID("ingotSteel");
//IDRegistry.genItemID("ingotBronze");
IDRegistry.genItemID("ingotCopper");
IDRegistry.genItemID("ingotTin");
IDRegistry.genItemID("ingotLead");
IDRegistry.genItemID("ingotAluminium");
IDRegistry.genItemID("ingotAlloy");


Item.createItem("ingotSteel", "Steel Ingot", {name: "ingot_steel", data: 0});
//Item.createItem("ingotBronze", "Bronze Ingot", {name: "ingot_bronze", data: 0});
Item.createItem("ingotCopper", "Copper Ingot", {name: "ingot_copper", data: 0});
Item.createItem("ingotTin", "Tin Ingot", {name: "ingot_tin", data: 0});
Item.createItem("ingotLead", "Lead Ingot", {name: "ingot_lead", data: 0});
Item.createItem("ingotAluminium", "Aluminium Ingot", {name: "ingot_aluminium", data: 0});
Item.createItem("ingotAlloy", "Alloy Ingot", {name: "ingot_alloy", data: 0});


Callback.addCallback("PostLoaded", function(){
	Recipes.addFurnace(265, ItemID.ingotSteel, 0);
	Recipes.addShaped({id: ItemID.ingotAlloy, count: 2, data: 0}, ["aaa","bbb","ccc"], ['a', ItemID.ingotSteel, 0,'b', ItemID.ingotCopper, 0,'c',ItemID.ingotTin,0]);
});