/*

IDRegistry.genBlockID("nuclearBomb"); 
Block.createBlockWithRotation("nuclearBomb", [
	{name: "Nuclear bomb", texture: [["nuclear_bomb", 0]], inCreative: true}
], "opaque");


ToolAPI.registerBlockMaterial(BlockID.siren, "stone");
Recipes.addShaped({id: BlockID.nuclearBomb, count: 1, data: 0}, ["psp","sus","psp"], ['u', ItemID.uranium, 0, 's', ItemID.plateSteel, 0, 'p', 289, 0]);


Callback.addCallback("DestroyBlockStart", function(coords, block){
	var item = Player.getCarriedItem();
	
	if(block.id == BlockID.nuclearBomb&&item.id == ItemID.wrench){
		Block.setTempDestroyTime(BlockID.nuclearBomb, 0);
		Player.setCarriedItem(item.id, item.count, item.data - 1);
		if(__config__.getBool("sounds"))sndWrench.playSound();
}});


TileEntity.registerPrototype(BlockID.nuclearBomb, {
	defaultValues: {
		isActive: false,
	},
	
	redstone: function(signal){
		this.data.isActive = signal.power > 0;
		if(this.data.isActive){
			/*if(__config__.getBool("sounds"))sndSiren.playSound();
			/*if(__config__.getBool("sounds"))sndSiren.setLooping(true);
		}
		else{
			/*if(__config__.getBool("sounds"))sndSiren.resetSound();
		}
	},
	
});


var exp = {
	explode_time: __config__.getNumber("exp.explode_time")
}

Callback.addCallback("tick",function() {
	if(exp.explode_time) {
		var timeToExplode = exp.explode_time;
	Game.message(timeToExplode);
	time--;*/

