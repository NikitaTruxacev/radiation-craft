
IDRegistry.genBlockID("toaster"); 
Block.createBlockWithRotation("toaster", [
	{name: "Toaster", texture: [["toaster_side", 0], ["toaster_top", 0], ["toaster_side", 0], ["toaster_side", 0], ["toaster_side", 0], ["toaster_side", 0]], inCreative: true}
], "opaque");

Block.setBlockMaterial(BlockID.toaster, "unbreaking", 4);
Recipes.addShaped({id: BlockID.toaster, count: 1, data: 0}, ["sss","srs","sss"], ['r', 296, 0, 's', ItemID.plateSteel, 0]);



Callback.addCallback("ItemUse", function(coords, item, block){
	if(block.id==BlockID.toaster){
		World.drop(coords.x+0.5, coords.y+0.9, coords.z+0.5, 297, 2, 0);
}}); 



Callback.addCallback("DestroyBlockStart", function(coords, block){
	var item = Player.getCarriedItem();
	if(block.id == BlockID.toaster&&item.id == ItemID.wrench){
		Block.setTempDestroyTime(BlockID.toaster, 0);
		Player.setCarriedItem(item.id, item.count, item.data - 1);
		/*if(__config__.getBool("sounds"))*/sndWrench.playSound();
}});