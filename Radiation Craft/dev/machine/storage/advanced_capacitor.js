IDRegistry.genBlockID("capacitorAdvanced"); 
Block.createBlock("capacitorAdvanced", [
	{name: "Advanced capacitor", texture: [["capacitor_bottom", 0], ["capacitor_top",1], ["capacitor_side", 1]], inCreative: true}
], "opaque");



var guiAdvCap = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Advanced Capacitor"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "bitmap", x: 530, y: 145, bitmap: "energy_bar_background", scale: guiScale},
	],
	
	elements: {
		"energyScale": {type: "scale", x: 530 + guiScale * 4, y: 145, direction: 0, value: 0, bitmap: "energy_bar_scale", scale: guiScale},
		"slot1": {type: "slot", x: 440, y: 75},
		"slot2": {type: "slot", x: 440, y: 210},
		"textInfo1": {type: "text", x: 650, y: 140, width: 350, height: 30, text: "0/"},
		"textInfo2": {type: "text", x: 650, y: 170, width: 350, height: 30, text: "100000000"}
	}
});


MachineRegistry.registerPrototype(BlockID.capacitorAdvanced, {
	isStorage: true,
	
	getGuiScreen: function(){
		return guiAdvCap;
	},
	
	tick: function(){
		var energyStorage = this.getEnergyStorage();
		this.container.setScale("energyScale", this.data.energy / energyStorage);
		this.container.setText("textInfo1", parseInt(this.data.energy) + "/");
		this.container.setText("textInfo2", energyStorage + "");
		
		var TRANSFER = 2048;
		this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slot2"), Math.min(TRANSFER, energyStorage - this.data.energy), 3);
		this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slot1"), this.data.energy, TRANSFER, 3);
	},
	
	getEnergyStorage: function(){
		return 100000000;
	},
	
	energyTick: function(type, src){
		var TRANSFER = 1024;
		this.data.energy += src.storage(Math.min(TRANSFER*4, this.getEnergyStorage() - this.data.energy), Math.min(TRANSFER, this.data.energy));
	}
});


Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: BlockID.capacitorAdvanced, count: 1, data: 0}, ["aba","cdc","aea"], ['a',265,0,'b',ItemID.transistor,0,'c',371,0,'d',339,0,'e',ItemID.printedcircuitboard,0]);
	});