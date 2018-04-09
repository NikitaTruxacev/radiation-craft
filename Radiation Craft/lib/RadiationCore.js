/*
author:"Egor Moroz",
description: "RadiationCoreAPI"
*/


//ShootsAndAimButtons


var currentUIscreen;
Callback.addCallback("NativeGuiChanged", function(screenName){
	currentUIscreen = screenName;
});

var UIGUNs = {
	isEnabled: false,
	container: null,
	Window: new UI.Window({
		location: {
			x: 0,
			y: 0,
			width: 60,
			height: 400
		},
		drawing: [{type: "background", color: 0}],
		elements: {}
	}),
	
	enButton: function(name){
		UIGUNs.isEnabled = true;
		buttonMap[name] = true;
	},
	
gunButton: function(idg){
Callback.addCallback("tick", function(){
	var item = Player.getCarriedItem();
		if(item.id == idg && World.getThreadTime() % 20 == 0){
			UIGUNs.enButton("btn_shoot_ak74");
			UIGUNs.enButton("btn_shoot_aug");
			UIGUNs.enButton("btn_shoot_bizon");
			UIGUNs.enButton("btn_shoot_deagle");
			UIGUNs.enButton("btn_shoot_dragunov");
			UIGUNs.enButton("btn_shoot_fnscar");
			UIGUNs.enButton("btn_shoot_glock");
			UIGUNs.enButton("btn_shoot_m16");
			UIGUNs.enButton("btn_shoot_magnum");
			UIGUNs.enButton("btn_shoot_makarov");
			UIGUNs.enButton("btn_shoot_mp5");
			UIGUNs.enButton("btn_shoot_rpd");
			UIGUNs.enButton("btn_shoot_rpg");
			UIGUNs.enButton("btn_shoot_rpk");
			UIGUNs.enButton("btn_shoot_spas");
			UIGUNs.enButton("btn_shoot_usp");
			//UIGUNs.enButton("btn_aim");
	}
  });
},
	
	registerButton: function(name, properties){
		buttonContent[name] = properties;
	}
}


var buttonMap = {
	btn_shoot_ak74: false,
	btn_shoot_aug: false,
	btn_shoot_bizon: false,
	btn_shoot_deagle: false,
	btn_shoot_dragunov: false,
	btn_shoot_fnscar: false,
	btn_shoot_glock: false,
	btn_shoot_m16: false,
	btn_shoot_magnum: false,
	btn_shoot_makarov: false,
	btn_shoot_mp5: false,
	btn_shoot_rpd: false,
	btn_shoot_rpg: false,
	btn_shoot_rpk: false,
	btn_shoot_spas: false,
	btn_shoot_usp: false
	//btn_aim: false
}

var buttonContent = {
	
btn_shoot_ak74: {
		y: 4000 ,
		type: "button",
		bitmap: "btn_shoot_unpressed",
		bitmap2: "btn_shoot_pressed",
		scale: 50,
		clicker: {
			onClick: function(){
		var coords = Player.getPosition();
		var item = Player.getCarriedItem(true);
		if(item.id == ItemID.ak74){
			Player.setCarriedItem(item.id, 1, item.data += 1);
				var arrow = Entity.spawn(coords.x, coords.y, coords.z, Native.EntityType.ARROW);
					Entity.moveToAngle(arrow, Entity.getLookAngle(Player.get()), {speed: 100});
}}}},	  


btn_shoot_aug: {
		y: 4000 ,
		type: "button",
		bitmap: "btn_shoot_unpressed",
		bitmap2: "btn_shoot_pressed",
		scale: 50,
		clicker: {
			onClick: function(){
		var coords = Player.getPosition();
		var item = Player.getCarriedItem(true);
		if(item.id == ItemID.aug){
			/*for(var i = 0; i < 36; i++){
				var slot = Player.getInventorySlot(i);
				if(slot.id == ItemID.ammoAUG ){*/
					Player.setCarriedItem(item.id, 1, item.data += 1);
					 var arrow = Entity.spawn(coords.x, coords.y, coords.z, Native.EntityType.ARROW);
						Entity.moveToAngle(arrow, Entity.getLookAngle(Player.get()), {speed: 100});
						
							
}}}},	  


btn_shoot_bizon: {
		y: 4000 ,
		type: "button",
		bitmap: "btn_shoot_unpressed",
		bitmap2: "btn_shoot_pressed",
		scale: 50,
		clicker: {
			onClick: function(){
		var coords = Player.getPosition();
		var item = Player.getCarriedItem(true);
		if(item.id == ItemID.bizon){
			/*for(var i = 0; i < 36; i++){
				var slot = Player.getInventorySlot(i);
				if(slot.id == ItemID.ammoBizon ){*/
					Player.setCarriedItem(item.id, 1, item.data += 1);
					 var arrow = Entity.spawn(coords.x, coords.y, coords.z, Native.EntityType.ARROW);
						Entity.moveToAngle(arrow, Entity.getLookAngle(Player.get()), {speed: 100});
						
						
}}}},	  


btn_shoot_deagle: {
		y: 4000 ,
		type: "button",
		bitmap: "btn_shoot_unpressed",
		bitmap2: "btn_shoot_pressed",
		scale: 50,
		clicker: {
			onClick: function(){
		var coords = Player.getPosition();
		var item = Player.getCarriedItem(true);
		if(item.id == ItemID.deserteagle){
			/*for(var i = 0; i < 36; i++){
				var slot = Player.getInventorySlot(i);
				if(slot.id == ItemID.ammoDeagle ){*/
					Player.setCarriedItem(item.id, 1, item.data += 1);
					 var arrow = Entity.spawn(coords.x, coords.y, coords.z, Native.EntityType.ARROW);
       Entity.moveToAngle(arrow, Entity.getLookAngle(Player.get()), {speed: 100});
}}}},	  


btn_shoot_dragunov: {
		y: 4000 ,
		type: "button",
		bitmap: "btn_shoot_unpressed",
		bitmap2: "btn_shoot_pressed",
		scale: 50,
		clicker: {
			onClick: function(){
		var coords = Player.getPosition();
		var item = Player.getCarriedItem(true);
		if(item.id == ItemID.dragunov){
			/*for(var i = 0; i < 36; i++){
				var slot = Player.getInventorySlot(i);
				if(slot.id == ItemID.ammoDragunov ){*/
					Player.setCarriedItem(item.id, 1, item.data += 1);
					 var arrow = Entity.spawn(coords.x, coords.y, coords.z, Native.EntityType.ARROW);
       Entity.moveToAngle(arrow, Entity.getLookAngle(Player.get()), {speed: 100});
}}}},	  


btn_shoot_fnscar: {
		y: 4000 ,
		type: "button",
		bitmap: "btn_shoot_unpressed",
		bitmap2: "btn_shoot_pressed",
		scale: 50,
		clicker: {
			onClick: function(){
		var coords = Player.getPosition();
		var item = Player.getCarriedItem(true);
		if(item.id == ItemID.fnscar){
		/*	for(var i = 0; i < 36; i++){
				var slot = Player.getInventorySlot(i);
				if(slot.id == ItemID.ammoFnscar ){*/
					Player.setCarriedItem(item.id, 1, item.data += 1);
					 var arrow = Entity.spawn(coords.x, coords.y, coords.z, Native.EntityType.ARROW);
       Entity.moveToAngle(arrow, Entity.getLookAngle(Player.get()), {speed: 100});
}}}},	  



btn_shoot_glock: {
		y: 4000 ,
		type: "button",
		bitmap: "btn_shoot_unpressed",
		bitmap2: "btn_shoot_pressed",
		scale: 50,
		clicker: {
			onClick: function(){
		var coords = Player.getPosition();
		var item = Player.getCarriedItem(true);
		if(item.id == ItemID.glock){
			/*for(var i = 0; i < 36; i++){
				var slot = Player.getInventorySlot(i);
				if(slot.id == ItemID.ammoGlock ){*/
					Player.setCarriedItem(item.id, 1, item.data += 1);
					 var arrow = Entity.spawn(coords.x, coords.y, coords.z, Native.EntityType.ARROW);
       Entity.moveToAngle(arrow, Entity.getLookAngle(Player.get()), {speed: 100});
}}}},	  



btn_shoot_m16: {
		y: 4000 ,
		type: "button",
		bitmap: "btn_shoot_unpressed",
		bitmap2: "btn_shoot_pressed",
		scale: 50,
		clicker: {
			onClick: function(){
		var coords = Player.getPosition();
		var item = Player.getCarriedItem(true);
		if(item.id == ItemID.m16){
			/*for(var i = 0; i < 36; i++){
				var slot = Player.getInventorySlot(i);
				if(slot.id == ItemID.ammoM16 ){*/
					Player.setCarriedItem(item.id, 1, item.data += 1);
					 var arrow = Entity.spawn(coords.x, coords.y, coords.z, Native.EntityType.ARROW);
       Entity.moveToAngle(arrow, Entity.getLookAngle(Player.get()), {speed: 100});
}}}},	  



btn_shoot_magnum: {
		y: 4000 ,
		type: "button",
		bitmap: "btn_shoot_unpressed",
		bitmap2: "btn_shoot_pressed",
		scale: 50,
		clicker: {
			onClick: function(){
		var coords = Player.getPosition();
		var item = Player.getCarriedItem(true);
		if(item.id == ItemID.magnum){
			/*for(var i = 0; i < 36; i++){
				var slot = Player.getInventorySlot(i);
				if(slot.id == ItemID.ammoMagnum44 ){*/
					Player.setCarriedItem(item.id, 1, item.data += 1);
					 var arrow = Entity.spawn(coords.x, coords.y, coords.z, Native.EntityType.ARROW);
       Entity.moveToAngle(arrow, Entity.getLookAngle(Player.get()), {speed: 100});
}}}},	  



btn_shoot_makarov: {
		y: 4000 ,
		type: "button",
		bitmap: "btn_shoot_unpressed",
		bitmap2: "btn_shoot_pressed",
		scale: 50,
		clicker: {
			onClick: function(){
		var coords = Player.getPosition();
		var item = Player.getCarriedItem(true);
		if(item.id == ItemID.makarov){
			/*for(var i = 0; i < 36; i++){
				var slot = Player.getInventorySlot(i);
				if(slot.id == ItemID.ammoMakarov ){*/
					Player.setCarriedItem(item.id, 1, item.data += 1);
					 var arrow = Entity.spawn(coords.x, coords.y, coords.z, Native.EntityType.ARROW);
       Entity.moveToAngle(arrow, Entity.getLookAngle(Player.get()), {speed: 100});
}}}},	  



btn_shoot_mp5: {
		y: 4000 ,
		type: "button",
		bitmap: "btn_shoot_unpressed",
		bitmap2: "btn_shoot_pressed",
		scale: 50,
		clicker: {
			onClick: function(){
		var coords = Player.getPosition();
		var item = Player.getCarriedItem(true);
		if(item.id == ItemID.mp5){
			/*for(var i = 0; i < 36; i++){
				var slot = Player.getInventorySlot(i);
				if(slot.id == ItemID.ammoMP5 ){*/
					Player.setCarriedItem(item.id, 1, item.data += 1);
					 var arrow = Entity.spawn(coords.x, coords.y, coords.z, Native.EntityType.ARROW);
       Entity.moveToAngle(arrow, Entity.getLookAngle(Player.get()), {speed: 100});
}}}},	  



btn_shoot_rpd: {
		y: 4000 ,
		type: "button",
		bitmap: "btn_shoot_unpressed",
		bitmap2: "btn_shoot_pressed",
		scale: 50,
		clicker: {
			onClick: function(){
		var coords = Player.getPosition();
		var item = Player.getCarriedItem(true);
		if(item.id == ItemID.rpd){
			/*for(var i = 0; i < 36; i++){
				var slot = Player.getInventorySlot(i);
				if(slot.id == ItemID.ammoRPD ){*/
					Player.setCarriedItem(item.id, 1, item.data += 1);
					 var arrow = Entity.spawn(coords.x, coords.y, coords.z, Native.EntityType.ARROW);
       Entity.moveToAngle(arrow, Entity.getLookAngle(Player.get()), {speed: 100});
}}}},	  



btn_shoot_rpg: {
		y: 4000 ,
		type: "button",
		bitmap: "btn_shoot_unpressed",
		bitmap2: "btn_shoot_pressed",
		scale: 50,
		clicker: {
			onClick: function(){
		var coords = Player.getPosition();
		var item = Player.getCarriedItem(true);
		if(item.id == ItemID.rpg){
			/*for(var i = 0; i < 36; i++){
				var slot = Player.getInventorySlot(i);
				if(slot.id == ItemID.ammoRPG ){*/
					Player.setCarriedItem(item.id, 1, item.data += 1);
					 var arrow = Entity.spawn(coords.x, coords.y, coords.z, Native.EntityType.ARROW);
       Entity.moveToAngle(arrow, Entity.getLookAngle(Player.get()), {speed: 100});
}}}},	  



btn_shoot_rpk: {
		y: 4000 ,
		type: "button",
		bitmap: "btn_shoot_unpressed",
		bitmap2: "btn_shoot_pressed",
		scale: 50,
		clicker: {
			onClick: function(){
		var coords = Player.getPosition();
		var item = Player.getCarriedItem(true);
		if(item.id == ItemID.rpk){
			/*for(var i = 0; i < 36; i++){
				var slot = Player.getInventorySlot(i);
				if(slot.id == ItemID.ammoRPK ){*/
					Player.setCarriedItem(item.id, 1, item.data += 1);
					 var arrow = Entity.spawn(coords.x, coords.y, coords.z, Native.EntityType.ARROW);
       Entity.moveToAngle(arrow, Entity.getLookAngle(Player.get()), {speed: 100});
}}}},	  



btn_shoot_spas: {
		y: 4000 ,
		type: "button",
		bitmap: "btn_shoot_unpressed",
		bitmap2: "btn_shoot_pressed",
		scale: 50,
		clicker: {
			onClick: function(){
		var coords = Player.getPosition();
		var item = Player.getCarriedItem(true);
		if(item.id == ItemID.spas){
			/*for(var i = 0; i < 36; i++){
				var slot = Player.getInventorySlot(i);
				if(slot.id == ItemID.ammoSpas ){*/
					Player.setCarriedItem(item.id, 1, item.data += 1);
					 var arrow = Entity.spawn(coords.x, coords.y, coords.z, Native.EntityType.ARROW);
       Entity.moveToAngle(arrow, Entity.getLookAngle(Player.get()), {speed: 100});
}}}},	  



btn_shoot_usp: {
		y: 4000 ,
		type: "button",
		bitmap: "btn_shoot_unpressed",
		bitmap2: "btn_shoot_pressed",
		scale: 50,
		clicker: {
			onClick: function(){
		var coords = Player.getPosition();
		var item = Player.getCarriedItem(true);
		if(item.id == ItemID.usp){
			/*for(var i = 0; i < 36; i++){
				var slot = Player.getInventorySlot(i);
				if(slot.id == ItemID.ammoUSP ){*/
					Player.setCarriedItem(item.id, 1, item.data += 1);
					 var arrow = Entity.spawn(coords.x, coords.y, coords.z, Native.EntityType.ARROW);
       Entity.moveToAngle(arrow, Entity.getLookAngle(Player.get()), {speed: 100});
}}}}

	  
	/*  
btn_aim: {
		y: 4000 ,
		x: 940,
		type: "button",
		bitmap: "btn_shoot_unpressed",
		bitmap2: "btn_shoot_pressed",
		scale: 50,
		clicker: {
			onClick: function(){
		var item = Player.getCarriedItem(true);
		if(item.id == ItemID.ak74){
			
}}}}*/
}


function updateUIGUNs(){
	var elements = UIGUNs.Window.content.elements;
	for(var name in buttonMap){
		if(buttonMap[name]){
			if(!elements[name]){
				elements[name] = buttonContent[name];
			}
			elements[name].x = null;
			buttonMap[name] = false;
		}
		else{
			elements[name] = null;
		}
	}
}


Callback.addCallback("tick", function(){
	if(UIGUNs.isEnabled && World.getThreadTime() % 20 == 0 && (currentUIscreen == "hud_screen" || currentUIscreen == "in_game_play_screen")){
		updateUIGUNs();
		if(!UIGUNs.container){
			UIGUNs.container = new UI.Container();
			UIGUNs.container.openAs(UIGUNs.Window);
		}
	}
	else{
		if(UIGUNs.container && World.getThreadTime() % 20 == 0){
			UIGUNs.container.close();
			UIGUNs.container = null;
		}
	}
	if(World.getThreadTime() % 20 == 0){
		UIGUNs.isEnabled = false;
	}
});

Callback.addCallback("LevelLeft", function(){
	if(UIGUNs.container){
		UIGUNs.container.close();
		UIGUNs.container = null;
	}
});



//HelmetUI

registerAPIUnit("UIGUNs", UIGUNs);