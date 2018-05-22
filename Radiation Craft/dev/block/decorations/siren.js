IDRegistry.genBlockID("siren"); 
Block.createBlock("siren", [
	{name: "Siren", texture: [["siren", 0]], inCreative: true}
], "opaque");

/*MachineRenderer.setStandartModel(BlockID.siren, [["siren", 0]]);
MachineRenderer.registerRenderModel(BlockID.siren, [["siren", 1]]);*/


ToolAPI.registerBlockMaterial(BlockID.siren, "stone");
Block.setBlockMaterial(BlockID.nuclearBomb, "unbreaking", 4);
Recipes.addShaped({id: BlockID.siren, count: 1, data: 0}, ["isi","sns","isi"], ['i', 265, 0, 's', ItemID.plateSteel, 0, 'n', 264, 0]);


Callback.addCallback("DestroyBlockStart", function(coords, block){
	var item = Player.getCarriedItem();
	if(block.id == BlockID.siren && item.id == ItemID.wrench){
		Block.setTempDestroyTime(BlockID.siren, 0);
		Player.setCarriedItem(item.id, item.count, item.data - 1);
		/*if(__config__.getBool("sounds"))*/sndWrench.playSound();
}});



TileEntity.registerPrototype(BlockID.siren, {
	defaultValues: {
		isActive: false,
	},
	
	redstone: function(signal){
		this.data.isActive = signal.power > 0;
		if(this.data.isActive){
			/*if(__config__.getBool("sounds"))*/sndSiren.playSound();
			/*if(__config__.getBool("sounds"))*/sndSiren.setLooping(true);
		}
		else{
			/*if(__config__.getBool("sounds"))*/sndSiren.resetSound();
		}
	}
});