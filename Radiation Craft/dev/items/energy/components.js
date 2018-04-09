IDRegistry.genItemID("ironNugget");
Item.createItem("ironNugget", "Iron nugget", {name: "iron_nugget", data: 0});

//microchips

IDRegistry.genItemID("transistor");
IDRegistry.genItemID("resistor");
IDRegistry.genItemID("microchip");

Item.createItem("transistor", "Transistor", {name: "transistor", data: 0});
Item.createItem("resistor", "Resistor", {name: "resistor", data: 0});
Item.createItem("microchip", "Microchip", {name: "microchip", data: 0});


//Circuits

IDRegistry.genItemID("rawCircuitBoard");
IDRegistry.genItemID("printedCircuitBoard");
IDRegistry.genItemID("microCircuit");

Item.createItem("rawCircuitBoard", "Raw circuit board", {name: "raw_circuit_board", data: 0});
Item.createItem("printedCircuitBoard", "Printed circuit board", {name: "printed_circuit_board", data: 0});
Item.createItem("microCircuit", "Microcircuit", {name: "microcircuit_basic", data: 0});




Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: ItemID.ironNugget, count: 1, data: 0}, [""," f ",""], ['f', 265, 0]);
	Recipes.addShaped({id: 265, count: 1, data: 0}, ["eee","eee","eee"], ['e', ItemID.ironNugget, 0]);
	Recipes.addFurnace(256, ItemID.ironNugget);
	Recipes.addFurnace(257, ItemID.ironNugget);
	Recipes.addFurnace(258, ItemID.ironNugget);
	Recipes.addFurnace(267, ItemID.ironNugget);
	Recipes.addFurnace(330, ItemID.ironNugget);
	Recipes.addFurnace(292, ItemID.ironNugget);
	Recipes.addFurnace(302, ItemID.ironNugget);
	Recipes.addFurnace(303, ItemID.ironNugget);
	Recipes.addFurnace(304, ItemID.ironNugget);
	Recipes.addFurnace(305, ItemID.ironNugget);
	Recipes.addFurnace(306, ItemID.ironNugget);
	Recipes.addFurnace(307, ItemID.ironNugget);
	Recipes.addFurnace(308, ItemID.ironNugget);
	Recipes.addFurnace(309, ItemID.ironNugget);
	
	Recipes.addShaped({id: ItemID.transistor, count: 1, data: 0}, ["eee","cbc","qaq"], ['a', 331, 0,'c',371,0,'b',339,0,'e',ItemID.ironNugget,0]);
	Recipes.addShaped({id: ItemID.microchip, count: 1, data: 0}, ["e e","rfr","e e"], ['r',331,0,'f',ItemID.transistor,0,'e',ItemID.ironNugget,0]);
	Recipes.addShaped({id: ItemID.rawCircuitBoard, count: 1, data: 0}, ["abc","",""], ['a',371,0,'b',337,0,'c',351,2]);
	Recipes.addFurnace(ItemID.rawCircuitBoard, ItemID.printedCircuitBoard);
	Recipes.addShaped({id: ItemID.resistor, count: 1, data: 0}, ["","cac",""], ['a', ItemID.cableCopper1, 0,'c',ItemID.cableCopper0,0]);
	Recipes.addShaped({id: ItemID.microCircuit, count: 1, data: 0}, ["hth","rpr","hth"], ['r', ItemID.resistor, 0, 't', ItemID.transistor, 0, 'h', ItemID.microchip, 0, 'p', ItemID.printedCircuitBoard, 0]);
});