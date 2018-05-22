IDRegistry.genBlockID("airPurifier"); 
Block.createBlockWithRotation("airPurifier", [
	{name: "Air Purifier", texture: [["machine_block", 0], ["machine_block", 0], ["machine_block", 0], ["air_purifier", 0], ["machine_block", 0], ["machine_block", 0]], inCreative: true}
], "opaque");

Block.registerDropFunction("airPurifier", function(coords, blockID, blockData, level, enchant){
		return [[BlockID.machineBlock, 1, 0]];
});