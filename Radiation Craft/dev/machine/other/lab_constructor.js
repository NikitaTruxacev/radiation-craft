/*
IDRegistry.genBlockID("labContructor"); 
Block.createBlock("labContructor", [
	{name: "Constructor Of Laboratories", texture: [["machine_block", 0], ["lab_constructor_top", 0], ["lab_constructor_side", 0], ["lab_constructor_side", 0], ["lab_constructor_side", 0], ["lab_constructor_side", 0]], inCreative: true}
], "opaque");

ToolAPI.registerBlockMaterial(BlockID.labContructor, "stone", 3, true);
Block.registerDropFunction("labContructor", function(coords, blockID, blockData, level, enchant){
		return [[BlockID.machineBlock, 1, 0]];
});



Callback.addCallback("DestroyBlockStart", function(coords, block){
	var item = Player.getCarriedItem();
	
	if(block.id == BlockID.labContructor&&item.id == ItemID.wrench){
		Block.setTempDestroyTime(BlockID.labContructor, 0);
		Player.setCarriedItem(item.id, item.count, item.data - 1);
		//if(__config__.getBool("sounds"))
			sndWrench.playSound();
}});
*/