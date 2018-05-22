/*
IDRegistry.genBlockID("terraformer"); 
Block.createBlock("terraformer", [
	{name: "Terraformer", texture: [["machine_block", 0], ["terraformer_top", 0], ["terraformer_side", 0]], inCreative: true}
], "opaque");

ToolAPI.registerBlockMaterial(BlockID.terraformer, "stone", 2, true);
Block.registerDropFunction("nuclearFurnace", function(coords, blockID, blockData, level, enchant){
		return [[BlockID.machineBlock, 1, 0]];
});



Callback.addCallback("DestroyBlockStart", function(coords, block){
	var item = Player.getCarriedItem();
	
	if(block.id == BlockID.terraformer && item.id == ItemID.wrench){
		Block.setTempDestroyTime(BlockID.terraformer, 0);
		Player.setCarriedItem(item.id, item.count, item.data - 1);
		//if(__config__.getBool("sounds"))
			sndWrench.playSound();
}});


Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: BlockID.terraformer, count: 1, data: 0}, ["isi","sns","isi"], ['i', 295, 0, 's', ItemID.plateSteel, 0, 'n', 3, 0]);
});*/