IDRegistry.genBlockID("nuclearFurnace"); 
Block.createBlockWithRotation("nuclearFurnace", [
	{name: "Nuclear Furnace", texture: [["nuclear_furnace_side", 0], ["nuclear_bomb", 0], ["nuclear_furnace_side", 0], ["nuclear_furnace_front", 0], ["nuclear_furnace_side", 0], ["nuclear_furnace_side", 0]], inCreative: true}
], "opaque");

Block.registerDropFunction("nuclearFurnace", function(coords, blockID, blockData, level, enchant){
		return [[BlockID.machineBlock, 1, 0]];
});


MachineRenderer.setStandartModel(BlockID.nuclearFurnace, [["nuclear_furnace_side", 0], ["nuclear_bomb", 0], ["nuclear_furnace_side", 0], ["nuclear_furnace_front", 0], ["nuclear_furnace_side", 0], ["nuclear_furnace_side", 0]], true);
MachineRenderer.registerRenderModel(BlockID.nuclearFurnace, [["nuclear_furnace_side", 0], ["nuclear_bomb", 0], ["nuclear_furnace_side", 0], ["nuclear_furnace_front", 1], ["nuclear_furnace_side", 0], ["nuclear_furnace_side", 0]], true);



var guiNuclearFurnace = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Nuclear Furnace"}},
		inventory: {standart: true},
		background: {bitmap: "nf_background"}
	},
	
	drawing: [
		{type: "bitmap", x: 530, y: 146, bitmap: "furnace_bar_background", scale: 3},
		{type: "bitmap", x: 450, y: 150, bitmap: "fire_background", scale: 3}
	],
	
	elements: {
		"progressScale": {type: "scale", x: 530, y: 146, direction: 0,  bitmap: "furnace_bar_scale", scale: 3},
		"burningScale": {type: "scale", x: 450, y: 150, direction: 1, bitmap: "nf_fire_scale", scale: 3},
		"slotSource": {type: "slot", x: 441, y: 75},
		"slotFuel": {type: "slot", x: 441, y: 212},
		"slotResult": {type: "slot", x: 625, y: 142},
	}
});


TileEntity.registerPrototype(BlockID.nuclearFurnace, {
		defaultValues: {
		progress: 0,
		burn: 0,
		burnMax: 0,
		isActive: false
	},
	
	getGuiScreen: function(){
		return guiNuclearFurnace;
	}
	/*
	addTransportedItem: function(item){
		var fuelSlot = this.container.getSlot("slotFuel");
		if(fuelSlot.id == 0 || fuelSlot.id == ItemID.uranium && fuelSlot.count < 64){
			var add = Math.min(item.count, 64 - slotFuel.count);
			item.count -= add;
			fuelSlot.id = ItemID.uranium;
			fuelSlot.count += add;
			if(!item.count){return;}
		}
	},
		
		var sourceSlot = this.container.getSlot("slotSource");
		if(sourceSlot.id == 0 || sourceSlot.id == item.id && sourceSlot.data == item.data && sourceSlot.count < 64){
			var add = Math.min(item.count, 64 - sourceSlot.count);
			item.count -= add;
			sourceSlot.id = item.id;
			sourceSlot.data = item.data;
			sourceSlot.count += add;
			if(!item.count){return;}
		},
	
	getTransportSlots: function(){
		return {input: ["slotSource", "slotFuel"], output: ["slotResult"]};
	},
	
	tick: function(){
		var sourceSlot = this.container.getSlot("slotSource");
		var result = Recipes.getFurnaceRecipeResult(sourceSlot.id, "iron");
		
		if(this.data.burn > 0){
			this.data.burn--;
		}
		if(this.data.burn == 0 && result){
			this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
		}
		
		if(result && this.data.burn > 0){
			var resultSlot = this.container.getSlot("slotResult");
			if((resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count < 64 || resultSlot.id == 0) && this.data.progress++ >= 20){
				sourceSlot.count--;
				resultSlot.id = result.id;
				resultSlot.data = result.data;
				resultSlot.count++;
				this.container.validateAll();
				this.data.progress = 0;
			}
		}
		else{
			this.data.progress = 0;
		}
		
		if(this.data.burn > 0){
			this.activate();
		}else{
			this.deactivate();
		}
		
		this.container.setScale("burningScale", this.data.burn / 120);
		this.container.setScale("progressScale", this.data.progress / 20);
	},
	
	init: MachineRegistry.initModel,
	activate: MachineRegistry.activateMachine,
	deactivate: MachineRegistry.deactivateMachine,
	destroy: this.deactivate,*/
});





Callback.addCallback("DestroyBlockStart", function(coords, block){
	var item = Player.getCarriedItem();
	
	if(block.id == BlockID.nuclearFurnace&&item.id == ItemID.wrench){
		Block.setTempDestroyTime(BlockID.nuclearFurnace, 0);
		Player.setCarriedItem(item.id, item.count, item.data - 1);
		sndWrench.play();
	}
});



Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: BlockID.nuclearFurnace, count: 1, data: 0}, ["epe","pmp","epe"], ['p',ItemID.plateLead,0,'m',ItemID.microCircuit,0,'e',ItemID.ingotLead,0]);
});