IDRegistry.genItemID("detonator");
IDRegistry.genItemID("frequencyTransmitter");


Item.createItem("detonator", "Detonator", {name: "detonator", data: 0},{stack: 1});
Item.createItem("frequencyTransmitter", "Frequency Transmitter", {name: "frequency_transmitter", data: 0}, {stack: 1});

Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: ItemID.detonator, count: 1, data: 0}, ["qqq","qaq","qbq"], ['a', 331, 0, 'b', ItemID.frequencyTransmitter, 0]);
	Recipes.addShaped({id: ItemID.frequencyTransmitter, count: 1, data: 0}, ["qqq","qaq","qbq"], ['a', ItemID.cableCopper1, 0, 'b', ItemID.microCircuit, 0]);
});