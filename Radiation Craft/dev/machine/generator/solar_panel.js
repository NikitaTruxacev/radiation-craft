IDRegistry.genBlockID("solarPanel");
Block.createBlock("solarPanel", [
	{name: "Solar Panel", texture: [["machine_block", 0], ["solar_panel", 0], ["machine_block", 0], ["machine_block", 0], ["machine_block", 0], ["machine_block", 0]], inCreative: true}
], "opaque");

Block.registerDropFunction("solarPanel", function(coords, blockID, blockData, level, enchant){
		return [[BlockID.machineBlock, 1, 0]];
});

Machine.registryPrototype(BlockID.solarPanel, {
	isGenerator: function() {
		return true;
	},

	energyTick: function(type, src){
		if(World.getLightLevel(this.x, this.y + 1, this.z) == 15){
			src.add(10);
		}
	}
});
