IDRegistry.genBlockID("machineBlock");
Block.createBlock("machineBlock", [
	{name: "Machine Block", texture: [["machine_block", 0]], inCreative: true}
], "opaque");

ToolAPI.registerBlockMaterial(BlockID.machineBlock, "stone", 1, true);
Block.setDestroyLevel("machineBlock", 1);


Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: BlockID.ironCoffer, count: 1, data: 0}, ["pcp","cqc","pcp"], ['p', ItemID.plateIron, 0, 'c', 265, 0]);
});