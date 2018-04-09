IDRegistry.genBlockID("gunCraftingTable"); 
Block.createBlockWithRotation("gunCraftingTable", [
	{name: "Gun Crafting Table", texture: [["machine_block", 0], ["guntable_top", 0], ["guntable_side", 0], ["guntable_side", 0], ["guntable_side", 0], ["guntable_side", 0]], inCreative: true}
], "opaque");

Block.registerDropFunction("gunCraftingTable", function(coords, blockID, blockData, level, enchant){
		return [[BlockID.machineBlock, 1, 0]];
});


var guiGunCraftingTable = new UI.StandartWindow({
	
standart: {
header: { text: { text: "Gun Crafting Table"}},
inventory: {standart: true},
background: {standart: true}
},

drawing: [
{type: "bitmap", bitmap: "furnace_bar_background", x: 610, y: 215, scale: guiScale},
{type: "bitmap", bitmap: "energy_small_background", x: 610, y: 150, scale: guiScale},
//{type: "bitmap", bitmap: "arrow_down_right", x: 680, y: 120, scale: guiScale},
],

elements: {
	"progressScale": {type: "scale", x: 610, y: 215, direction: 0, value: 0, bitmap: "furnace_bar_scale", scale: guiScale},
	"progressScale1": {type: "scale", x: 610, y: 150, direction: 0, value: 1, bitmap: "energy_small_scale", scale: guiScale},
	
	"input": {type: "slot", x: 375, y: 215, size: 70},
	"input1": {type: "slot", x: 450, y: 215, size: 70},
	"input2": {type: "slot", x: 525, y: 215, size: 70},
	"input3": {type: "slot", x: 410, y: 290, size: 70},
	"input4": {type: "slot", x: 485, y: 290, size: 70},
	"output": {type: "slot", x: 710, y: 195, size: 110},
	"output0": {type: "slot", x: 825, y: 195, size: 110}
	}
});



var RecipeRegistry = {
recipes: {},

add: function(obj){
	this.recipes[obj.slot1 + ":" + obj.slot2 + ":" + obj.slot3 + ":" + obj.slot4] = obj;
},

get: function(slot1, slot2, slot3, slot4){
	return this.recipes[slot1 + ":" + slot2 + ":" + slot3 + ":" + slot4];
}

};

//Recipes

RecipeRegistry.add({
	slot1: ItemID.partstock,
	slot2: ItemID.partbodytw,
	slot3: ItemID.partbarrel, //AK 74
	slot4: ItemID.parthandle,
	outputID: [ItemID.ak74, ItemID.ammoAK74]
});


MachineRegistry.registerPrototype(BlockID.gunCraftingTable, {
	getGuiScreen: function(){
		return guiGunCraftingTable;
	},

PROGRESS_MAX: 100,

defaultValues: {
	progress: 200,
	output: 0,
	output0: 0,
},

tick: function () {

if(this.data.progress){
	if(this.data.progress >= this.PROGRESS_MAX){
		var slotOutput = this.container.getSlot("output");
		var slotOutput1 = this.container.getSlot("output0");
	if(!slotOutput.id || (slotOutput.id == this.data.output && slotOutput.count < Item.getMaxStack(slotOutput.id))){
		if(!slotOutput1.id || (slotOutput1.id == this.data.output0 && slotOutput1.count < Item.getMaxStack(slotOutput1.id))){
			slotOutput1.id = this.data.output0;
			slotOutput1.count += 1;

			slotOutput.id = this.data.output;
			slotOutput.count += 1;
			this.data.progress = 0;
	}}
	}else{
		this.data.progress++;
	}
	}else{
		
var slot1 = this.container.getSlot("input");
var slot2 = this.container.getSlot("input1");
var slot3 = this.container.getSlot("input2");
var slot4 = this.container.getSlot("input3");
var slot5 = this.container.getSlot("input4");

var recipe = RecipeRegistry.get(slot1.id, slot2.id, slot3.id, slot4.id);

if(recipe) {
	
	this.data.output = recipe.outputID[0];
	this.data.output0 = recipe.outputID[1];
	this.data.progress = 1;

if(slot1.id)
	slot1.count -= 1;

if(slot2.id)
	slot2.count -= 1;

if(slot3.id)
	slot3.count -= 1;

if(slot4.id)
	slot4.count -= 1;

if(slot5.id)
	slot5.count -= 1;

this.container.validateAll();
}}

this.container.setScale("progressScale", this.data.progress / this.PROGRESS_MAX);
}});



Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: BlockID.gunCraftingTable, count: 1, data: 0}, ["sss","sws","sss"], ['r', 331, 0, 's', ItemID.plateSteel, 0, 'w', ItemID.wrench, 0]);
});


Callback.addCallback("DestroyBlockStart", function(coords, block){
	var item = Player.getCarriedItem();
	
	if(block.id == BlockID.gunCraftingTable&&item.id == ItemID.wrench){
		Block.setTempDestroyTime(BlockID.gunCraftingTable, 0);
		Player.setCarriedItem(item.id, item.count, item.data - 1);
		//if(__config__.getBool("sounds"))
		sndWrench.playSound();
}});