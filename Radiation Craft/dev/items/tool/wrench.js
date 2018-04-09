
IDRegistry.genItemID("wrench");
Item.createItem("wrench", "Wrench", {name: "wrench", data: 0},{stack: 1});

ToolAPI.addToolMaterial("wrench", {durability: 80});


Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: ItemID.wrench, count: 1, data: 0}, ["oqo","ooo","qoq"], ['o', ItemID.ingotSteel, 0]);
});