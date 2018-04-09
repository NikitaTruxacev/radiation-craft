
IDRegistry.genBlockID("computer"); 
Block.createBlockWithRotation("computer", [
	{name: "Computer", texture: [["cnd_bottom", 0], ["cnd_top",0], ["cnd_centre", 0], ["computer_front_off", 0], ["cnd_centre", 0], ["cnd_centre", 0]], inCreative: true}
], "opaque");


ToolAPI.registerBlockMaterial(BlockID.computer, "stone", 2, true);

MachineRenderer.setStandartModel(BlockID.computer, [["cnd_bottom", 0], ["cnd_top", 0], ["cnd_centre", 0], ["computer_front_off", 0], ["cnd_centre", 0], ["cnd_centre", 0]], true);
MachineRenderer.registerRenderModel(BlockID.computer, [["cnd_bottom", 0], ["cnd_top", 0], ["cnd_centre", 0], ["computer_front_on", 0], ["cnd_centre", 0], ["cnd_centre", 0]], true);


Callback.addCallback("ItemUse", function(coords, item, block){
	if (block.id == BlockID.computer){
		var block = World.getBlock(this.x, this.y, this.z);
			MachineRenderer.mapAtCoords(this.x, this.y, this.z, BlockID.computer, 0);
		}
});
	


Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: BlockID.computer, count: 1, data: 0}, ["rsr","sgs","rsr"], ['r', 331, 0, 's', ItemID.plateSteel, 0, 'g' ,102 ,0]);
});