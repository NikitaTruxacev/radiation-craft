
IDRegistry.genBlockID("leadGlass"); 
Block.createBlock("leadGlass", [
	{name: "Lead Glass", texture: [["lead_glass", 0]], inCreative: true}
]);

ToolAPI.registerBlockMaterial(BlockID.leadGlass, "stone", 3, true);


IDRegistry.genBlockID("uraniumGlass"); 
Block.createBlock("uraniumGlass", [
	{name: "Uranium Glass", texture: [["uranium_glass", 0]], inCreative: true}
]);

ToolAPI.registerBlockMaterial(BlockID.uraniumGlass, "stone", 3, true);