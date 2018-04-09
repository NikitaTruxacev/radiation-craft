/*IDRegistry.genBlockID("vacuumFurnace"); 
Block.createBlockWithRotation("vacuumFurnace", [
	{name: "Vacuum furnace", texture: [["machine_block", 0], ["machine_block", 0], ["machine_block", 0], ["furnace_vacuum", 0], ["machine_block", 0], ["machine_block", 0]], inCreative: true}
], "opaque");

Block.registerDropFunction("vacuumFurnace", function(coords, blockID, blockData, level, enchant){
		return [[BlockID.machineBlock, 1, 0]];
});


MachineRenderer.setStandartModel(BlockID.vacuumFurnace, [["machine_block", 0], ["machine_block", 0], ["machine_block", 0], ["furnace_vacuum", 0], ["machine_block", 0], ["machine_block", 0]], true);
MachineRenderer.registerRenderModel(BlockID.vacuumFurnace, [["machine_block", 0], ["machine_block", 0], ["machine_block", 0], ["furnace_vacuum", 1], ["machine_block", 0], ["machine_block", 0]], true);



var guiVacuumFurnace = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Vacuum Furnace"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "bitmap", x: 530, y: 146, bitmap: "furnace_bar_background", scale: 4},
		{type: "bitmap", x: 450, y: 150, bitmap: "fire_background", scale: 4}
	],
	
	elements: {
		"progressScale": {type: "scale", x: 530, y: 146, direction: 0,  bitmap: "furnace_bar_scale", scale: 4},
		"burningScale": {type: "scale", x: 450, y: 150, direction: 1, bitmap: "fire_scale", scale: 4},
		"slotSource": {type: "slot", x: 441, y: 75},
		"slotFuel": {type: "slot", x: 441, y: 212},
		"slotResult": {type: "slot", x: 625, y: 142},
	}
});


MachineRegistry.registerPrototype(BlockID.vacuumFurnace, {
	getGuiScreen: function(){
		return guiVacuumFurnace;
	}
});


Callback.addCallback("DestroyBlockStart", function(coords, block){
	var item = Player.getCarriedItem();
	
	if(block.id == BlockID.vacuumFurnace&&item.id == ItemID.wrench){
		Block.setTempDestroyTime(BlockID.vacuumFurnace, 0);
		Player.setCarriedItem(item.id, item.count, item.data - 1);
		//if(__config__.getBool("sounds"))
		sndWrench.playSound();
}});*/