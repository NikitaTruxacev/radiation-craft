IDRegistry.genItemID("plateAlloy");
IDRegistry.genItemID("plateBronze");
IDRegistry.genItemID("plateCopper");
//IDRegistry.genItemID("plateGold");
IDRegistry.genItemID("plateIron");
IDRegistry.genItemID("plateLead");
IDRegistry.genItemID("plateSteel");


Item.createItem("plateAlloy", "Alloy Plate", {name: "plate_alloy", data: 0});
Item.createItem("plateBronze", "Bronze Plate", {name: "plate_bronze", data: 0});
Item.createItem("plateCopper", "Copper Plate", {name: "plate_copper", data: 0});
//Item.createItem("plateGold", "Gold Plate", {name: "plate_gold", data: 0});
Item.createItem("plateIron", "Iron Plate", {name: "plate_iron", data: 0});
Item.createItem("plateLead", "Lead Plate", {name: "plate_lead", data: 0});
Item.createItem("plateSteel", "Steel Plate", {name: "plate_steel", data: 0});



Callback.addCallback("PostLoaded", function(){
	Recipes.addFurnace(ItemID.ingotAlloy, ItemID.plateAlloy, 0);
	addRecipeWithCraftingTool({id: ItemID.plateBronze, count: 1, data: 0}, [{id: ItemID.ingotBronze, data: 0}], ItemID.craftingHammer);
	addRecipeWithCraftingTool({id: ItemID.plateCopper, count: 1, data: 0}, [{id: ItemID.ingotCopper, data: 0}], ItemID.craftingHammer);
	addRecipeWithCraftingTool({id: ItemID.plateIron, count: 1, data: 0}, [{id: 265, data: 0}], ItemID.craftingHammer);
	//addRecipeWithCraftingTool({id: ItemID.plateGold, count: 1, data: 0}, [{id: 266, data: 0}], ItemID.craftingHammer);
	addRecipeWithCraftingTool({id: ItemID.plateLead, count: 1, data: 0}, [{id: ItemID.ingotLead, data: 0}], ItemID.craftingHammer);
	addRecipeWithCraftingTool({id: ItemID.plateSteel, count: 1, data: 0}, [{id: ItemID.ingotSteel, data: 0}], ItemID.craftingHammer);
});