
IDRegistry.genBlockID("diskdrive"); 
Block.createBlockWithRotation("diskdrive", [
	{name: "Disk drive", texture: [["cnd_bottom", 0], ["cnd_top",0], ["cnd_centre", 0], ["disk_drive_front", 0], ["cnd_centre", 0], ["cnd_centre", 0]], inCreative: true}
], "opaque");

ToolAPI.registerBlockMaterial(BlockID.reinforcedGlass, "stone", 2, true);

//Disk_Drive_GUI

var Disk_Drive_GUI = new UI.StandartWindow({
standart: {
header: {text: {text: "Disk Drive"}},
inventory: {standart: true},
background: {standart: true}},

elements: {
"produce0": {type: "slot", x: 590, y: 210, size: 70}
}
});

TileEntity.registerPrototype(BlockID.diskdrive,{getGuiScreen:function(){return Disk_Drive_GUI}});


Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: BlockID.diskdrive, count: 1, data: 0}, ["rsr","srs","rsr"], ['r', 331, 0, 's', ItemID.plateSteel, 0]);
});

