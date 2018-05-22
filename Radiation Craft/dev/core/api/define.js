var Machine = {
	machineIDs: {},

	isMachine: function(id){
		return this.machineIDs[id];
	},

	registryPrototype: function(id, Prototype){
		//Machine.registryPrototype
		
		// register render
		ICRender.getGroup("ic-wire").add(id, -1);
		// register ID
		this.machineIDs[id] = true;
		// setup energy value
		if (Prototype.defaultValues){
			Prototype.defaultValues.energy = 0;
		}
		else{
			Prototype.defaultValues = {
				energy: 0
			};
		}
		// copy functions
		if(!Prototype.getEnergyStorage){
			Prototype.getEnergyStorage = function(){
				return 0;
			};
		}
		
		ToolAPI.registerBlockMaterial(id, "stone");
		Block.setDestroyTime(id, 3);
		TileEntity.registerPrototype(id, Prototype);
		EnergyTileRegistry.addEnergyTypeForId(id, Rad);
	},
	
	initModel: function(){
		if(this.data.isActive){
			var block = World.getBlock(this.x, this.y, this.z);
			MachineRenderer.mapAtCoords(this.x, this.y, this.z, block.id, block.data);
		}
	},
	
	activateMachine: function(){
		if(!this.data.isActive){
			this.data.isActive = true;
			var block = World.getBlock(this.x, this.y, this.z);
			MachineRenderer.mapAtCoords(this.x, this.y, this.z, block.id, block.data);
		}
	},
	
	deactivateMachine: function(){
		if(this.data.isActive){
			this.data.isActive = false;
			BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
		}
	},
	
	basicEnergyReceiveFunc: function(type, src){
		var energyNeed = this.getEnergyStorage() - this.data.energy;
		this.data.energy += src.getAll(energyNeed);
	}
}
