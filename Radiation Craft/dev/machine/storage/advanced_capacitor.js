﻿IDRegistry.genBlockID("advCapacitor");
Block.createBlockWithRotation("advCapacitor", [
	{name: "Advanced Capacitor", texture: [["capacitor_bottom", 0], ["capacitor_top", 1], ["capacitor_side", 1], ["capacitor_side", 1], ["capacitor_side", 1], ["capacitor_side", 1]], inCreative: true}
], "opaque");

Block.registerDropFunction("advCapacitor", function(coords, blockID, blockData, level, enchant){
		return [[BlockID.machineBlock, 1, 0]];
});


var guiAdvCapacitor = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Advanced Capacitor"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "bitmap", x: 530, y: 144, bitmap: "energy_bar_background", scale: guiScale},
	],
	
	elements: {
		"energyScale": {type: "scale", x: 530 + guiScale * 4, y: 144, direction: 0, value: 0.5, bitmap: "energy_bar_scale", scale: guiScale},
		"slot1": {type: "slot", x: 441, y: 75},
		"slot2": {type: "slot", x: 441, y: 212},
		"textInfo1": {type: "text", x: 642, y: 142, width: 350, height: 30, text: "0/"},
		"textInfo2": {type: "text", x: 642, y: 172, width: 350, height: 30, text: "1000000"}
	}
});




Machine.registryPrototype(BlockID.advCapacitor, {
	isStorage: true,
	
	getGuiScreen: function(){
		return guiAdvCapacitor;
	},
	
	tick: function(){
		var energyStorage = this.getEnergyStorage();
		this.container.setScale("energyScale", this.data.energy / energyStorage);
		this.container.setText("textInfo1", parseInt(this.data.energy) + "/");
		this.container.setText("textInfo2", energyStorage + "");
		
		var TRANSFER = 128;
		this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slot2"), Math.min(TRANSFER, energyStorage - this.data.energy), 3);
		this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slot1"), this.data.energy, TRANSFER, 3);
	},
	
	getEnergyStorage: function(){
		return 1000000;
	},
	
	energyTick: function(type, src){
		var TRANSFER = 64;
		this.data.energy += src.storage(Math.min(TRANSFER*4, this.getEnergyStorage() - this.data.energy), Math.min(TRANSFER, this.data.energy));
	}
});