/*
 IDRegistry.genBlockID("blockBronze"); 
Block.createBlock("blockBronze", [
	{name: "Bronze block", texture: [["block_bronze", 0]], inCreative: true}
], "opaque");


 ToolAPI.registerBlockMaterial(BlockID.blockBronze, "stone", 2, true);
Block.setDestroyLevel("blockBronze", 2);
Block.setDestroyTime(BlockID.blockBronze, 5);*/


 
IDRegistry.genBlockID("blockTin"); 
Block.createBlock("blockTin", [
	{name: "Tin Block", texture: [["block_tin", 0]], inCreative: true}
], "opaque");

ToolAPI.registerBlockMaterial(BlockID.blockTin, "stone", 2, true);
Block.setDestroyLevel("blockTin", 2);
Block.setDestroyTime(BlockID.blockTin, 5);



IDRegistry.genBlockID("blockCopper"); 
Block.createBlock("blockCopper", [
	{name: "Copper Block", texture: [["block_copper", 0]], inCreative: true}
], "opaque");


ToolAPI.registerBlockMaterial(BlockID.blockCopper, "stone", 2, true);
Block.setDestroyLevel("blockCopper", 2);
Block.setDestroyTime(BlockID.blockCopper, 5);



IDRegistry.genBlockID("blockSteel"); 
Block.createBlock("blockSteel", [
	{name: "Steel Block", texture: [["block_steel", 0]], inCreative: true}
], "opaque");


ToolAPI.registerBlockMaterial(BlockID.blockSteel, "stone", 2, true);
Block.setDestroyLevel("blockSteel", 2);
Block.setDestroyTime(BlockID.blockSteel, 5);



IDRegistry.genBlockID("blockLead"); 
Block.createBlock("blockLead", [
	{name: "Lead Block", texture: [["block_lead", 0]], inCreative: true}
], "opaque");

ToolAPI.registerBlockMaterial(BlockID.blockLead, "stone", 2, true);
Block.setDestroyLevel("blockLead", 2);
Block.setDestroyTime(BlockID.blockLead, 5);



IDRegistry.genBlockID("blockUranium"); 
Block.createBlock("blockUranium", [
	{name: "Uranium Block", texture: [["uranium_block_bt", 0], ["uranium_block_bt",0], ["uranium_block_sides", 0]], inCreative: true}
], "opaque");

ToolAPI.registerBlockMaterial(BlockID.blockUranium, "stone", 2, true);
Block.setDestroyLevel("blockUranium", 2);
Block.setDestroyTime(BlockID.blockUranium, 5);



Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id:  ItemID.ingotLead, count: 9, data: 0}, ["ooo","oao","ooo"], ['a',BlockID.blockLead, 0]);
		Recipes.addShaped({id:  BlockID.blockLead, count: 1, data: 0}, ["ooo","ooo","ooo"], ['a',ItemID.ingotLead, 0]);
	//Recipes.addShaped({id:  ItemID.ingotBronze, count: 9, data: 0}, ["ooo","oao","ooo"], ['a',BlockID.blockBronze, 0]);
		//Recipes.addShaped({id:  BlockID.blockBronze, count: 1, data: 0}, ["ooo","ooo","ooo"], ['a',ItemID.ingotBronze, 0]);
	Recipes.addShaped({id:  ItemID.ingotTin, count: 9, data: 0}, ["ooo","oao","ooo"], ['a',BlockID.blockTin, 0]);
		Recipes.addShaped({id:  BlockID.blockTin, count: 1, data: 0}, ["ooo","ooo","ooo"], ['a',ItemID.ingotTin, 0]);
	Recipes.addShaped({id:  ItemID.ingotCopper, count: 9, data: 0}, ["ooo","oao","ooo"], ['a',BlockID.blockCopper, 0]);
		Recipes.addShaped({id:  BlockID.blockCopper, count: 1, data: 0}, ["ooo","ooo","ooo"], ['a',ItemID.ingotCopper, 0]);
	Recipes.addShaped({id:  ItemID.ingotSteel, count: 9, data: 0}, ["ooo","oao","ooo"], ['a',BlockID.blockSteel, 0]);
		Recipes.addShaped({id:  BlockID.blockSteel, count: 1, data: 0}, ["ooo","ooo","ooo"], ['a',ItemID.ingotSteel, 0]);
	Recipes.addShaped({id:  ItemID.uranium, count: 9, data: 0}, ["ooo","oao","ooo"], ['a',BlockID.blockUranium, 0]);
		Recipes.addShaped({id:  BlockID.blockUranium, count: 1, data: 0}, ["ooo","ooo","ooo"], ['a',ItemID.uranium, 0]);
});
