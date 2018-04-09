
var BLOCK_LIGHT = Block.createSpecialType({
	lightlevel: 15,
	opaque: true
});
/*

IDRegistry.genBlockID("lamp");
Block.createBlock("lamp", [{name: "Lamp", texture: [["lamp", 0], ["lamp", 1], ["lamp", 0], ["lamp", 0], ["lamp", 0], ["lamp", 0]], inCreative: true}], BLOCK_LIGHT);

Block.registerDropFunction("Lamp", function(coords, blockID, blockData, level, enchant){
		return 0;
});

var render = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.lamp, 0, render);

var model = BlockRenderer.createModel();

model.addBox(4/16, 10/16, 4/16, 12/16, 16/16, 12/16, [["lamp", 1]]);
model.addBox(3/16, 14/16, 3/16, 13/16, 15/16, 13/16, [["lamp", 0]]);
model.addBox(2/16, 15/16, 2/16, 14/16, 16/16, 14/16, [["lamp", 0]]);

render.addEntry(model);
Block.setBlockShape(BlockID.lamp, {x: 0, y: 0, z: 0}, {x: 1, y: 1, z: 1});


//IDRegistry.genItemID("itemLamp");
//Item.createItem("itemLamp", "Lamp", {name: "lamp_item", data: 0},{stack: 64});



*/

IDRegistry.genBlockID("glowLamp");
Block.createBlock("glowLamp", [
{name: "Glow lamp", texture: [["glow_lamp", 0]], inCreative: true}
], BLOCK_LIGHT);

ToolAPI.registerBlockMaterial(BlockID.glowLamp, "stone", 2, true);




Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: BlockID.glowLamp, count: 1, data: 0}, ["eoe","eoe","eoe"], ['e', ItemID.plateIron, 0, 'o', 348, 0]);
});
