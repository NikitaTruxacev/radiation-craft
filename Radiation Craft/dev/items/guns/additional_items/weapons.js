IDRegistry.genItemID("firemanAxe");
IDRegistry.genItemID("batWooden");
IDRegistry.genItemID("batSteel");
IDRegistry.genItemID("katana");
IDRegistry.genItemID("machete");
IDRegistry.genItemID("knife");



Item.createItem("firemanAxe", "Fireman Axe", {name: "fireman_axe", data: 0},{stack: 1});
Item.createItem("batWooden", "Wooden bat", {name: "wooden_bat", data: 0},{stack: 1});
Item.createItem("batSteel", "Steel bat", {name: "steel_bat", data: 0},{stack: 1});
Item.createItem("katana", "Katana", {name: "katana", data: 0},{stack: 1});
Item.createItem("machete", "Machete", {name: "machete", data: 0},{stack: 1});
Item.createItem("knife", "Knife", {name: "knife", data: 0},{stack: 1});


Item.setToolRender(ItemID.firemanAxe, true);
Item.setToolRender(ItemID.batWooden, true);
Item.setToolRender(ItemID.batSteel, true);
Item.setToolRender(ItemID.katana, true);
Item.setToolRender(ItemID.machete, true);
Item.setToolRender(ItemID.knife, true);



/*
IDRegistry.genItemID("arrowfire");
Item.createItem("arrowfire", "Взрывная стрела", {name: "arrow_fire", data: 0},{stack: 64});

IDRegistry.genItemID("arrowexplosion");
Item.createItem("arrowexplosion", "Взрывная стрела", {name: "arrow_explosion", data: 0},{stack: 64});
*/



ToolAPI.addToolMaterial("firemanAxe", {durability: 150, level: 0, damage: 5});
ToolAPI.setTool(ItemID.firemanAxe, "firemanAxe", ToolType.axe);


ToolAPI.addToolMaterial("batWooden", {durability: 60, level: 0, damage: 3});
ToolAPI.setTool(ItemID.batWooden, "batWooden", ToolType.sword);


ToolAPI.addToolMaterial("batSteel", {durability: 120, level: 0, damage: 4});
ToolAPI.setTool(ItemID.batSteel, "batSteel", ToolType.sword);


ToolAPI.addToolMaterial("katana", {durability: 200, level: 0, damage: 7});
ToolAPI.setTool(ItemID.katana, "katana", ToolType.sword);


ToolAPI.addToolMaterial("machete", {durability: 125, level: 0, damage: 7});
ToolAPI.setTool(ItemID.machete, "machete", ToolType.sword);


ToolAPI.addToolMaterial("knife", {durability: 75, level: 0, damage: 2});
ToolAPI.setTool(ItemID.knife, "knife", ToolType.sword);


/*
Callback.addCallback("DestroyBlock", function(coords, block, player){
	//Player.setCarriedItem(item.id, item.count - 1, item.data);
	
});*/

Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: ItemID.firemanAxe, count: 1, data: 0}, ["aaq","aoq","qoq"], ['a', ItemID.ingotSteel, 0,'o', 280, 0]);
	Recipes.addShaped({id: ItemID.batWooden, count: 1, data: 0}, ["qqa","qaq","oqq"], ['a', 5, -1,'o', 280, 0]);
	Recipes.addShaped({id: ItemID.batSteel, count: 1, data: 0}, ["qqa","qaq","oqq"], ['a', ItemID.ingotSteel, 0,'o',280,0]);
	Recipes.addShaped({id: ItemID.katana, count: 1, data: 0}, ["qqa","qaq","oqq"], ['a',265, 0,'o', 280, 0]);
	Recipes.addShaped({id: ItemID.machete, count: 1, data: 0}, ["qqa","qaq","oqq"], ['a',ItemID.ingotSteel, 0,'o', 280, 0]);
	Recipes.addShaped({id: ItemID.knife, count: 1, data: 0}, [""," a ","o"], ['a',ItemID.ingotSteel, 0,'o', ItemID.rubber, 0]);
});