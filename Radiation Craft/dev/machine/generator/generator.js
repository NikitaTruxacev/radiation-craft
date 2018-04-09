IDRegistry.genBlockID("generator");
Block.createBlockWithRotation("generator", [
	{name: "Generator", texture: [["machine_block", 0], ["machine_block", 0], ["machine_block", 0], ["generator", 0], ["machine_block", 0], ["machine_block", 0]], inCreative: true}
], "opaque");

MachineRenderer.setStandartModel(BlockID.generator, [["machine_block", 0], ["machine_block", 0], ["machine_block", 0], ["generator", 0], ["machine_block", 0], ["machine_block", 0]], true);
MachineRenderer.registerRenderModel(BlockID.generator, [["machine_block", 0], ["machine_block", 0], ["machine_block", 0], ["generator", 1], ["machine_block", 0], ["machine_block", 0]], true);


Block.registerDropFunction("generator", function(coords, blockID, blockData, level, enchant){
		return [[BlockID.machineBlock, 1, 0]];
});



var guiGenerator = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Generator"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "bitmap", x: 530, y: 144, bitmap: "energy_bar_background", scale: guiScale},
		{type: "bitmap", x: 450, y: 150, bitmap: "fire_background", scale: guiScale},
	],
	
	elements: {
		"energyScale": {type: "scale", x: 530 + guiScale * 4, y: 144, direction: 0, value: 0.5, bitmap: "energy_bar_scale", scale: guiScale},
		"burningScale": {type: "scale", x: 450, y: 150, direction: 1, value: 0.5, bitmap: "fire_scale", scale: guiScale},
		"slotEnergy": {type: "slot", x: 441, y: 75},
		"slotFuel": {type: "slot", x: 441, y: 212},
		"textInfo1": {type: "text", x: 642, y: 142, width: 300, height: 30, text: "0/"},
		"textInfo2": {type: "text", x: 642, y: 172, width: 300, height: 30, text: "50000"}
	}
});


MachineRegistry.registerPrototype(BlockID.generator, {
    defaultValues: {
		burn: 0,
		burnMax: 0,
		isActive: false
	},
    
	getGuiScreen: function(){
		return guiGenerator;
	},
	
	getTransportSlots: function(){
		return {input: ["slotFuel"]};
	},
	
	getFuel: function(slotName){
		var fuelSlot = this.container.getSlot(slotName);
		if (fuelSlot.id > 0){
			var burn = Recipes.getFuelBurnDuration(fuelSlot.id, fuelSlot.data);
			if (burn && !LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data)){
				fuelSlot.count--;
				this.container.validateSlot(slotName);
				this.activate();
				return burn;
			}
		}
		this.deactivate();
		return 0;
	},
	
	tick: function(){
		var energyStorage = this.getEnergyStorage();
		
		if(this.data.burn <= 0){
			this.data.burn = this.data.burnMax = this.getFuel("slotFuel") / 4;
		}
		if(this.data.burn > 0 && this.data.energy < energyStorage){
			this.data.energy = Math.min(this.data.energy + 128, energyStorage);
			this.data.burn--;
		}
		
		this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotEnergy"), this.data.energy, 128, 0);
		
		this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
		this.container.setScale("energyScale", this.data.energy / energyStorage);
		this.container.setText("textInfo1", this.data.energy + "/");
		this.container.setText("textInfo2", energyStorage + "");
	},
	
	isGenerator: function() {
		return true;
	},
	
	getEnergyStorage: function(){
		return 50000;
	},
	
	energyTick: function(type, src){
		var output = Math.min(512, this.data.energy);
		this.data.energy += src.add(output) - output;
	},
	
	init: MachineRegistry.initModel,
	activate: MachineRegistry.activateMachine,
	deactivate: MachineRegistry.deactivateMachine,
	destroy: this.deactivate,
});


/*
Callback.addCallback("PostLoaded", function(){
	
});*/