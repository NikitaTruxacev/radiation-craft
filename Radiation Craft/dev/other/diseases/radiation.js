
var Radiation = {
	"radiation": __config__.getBool("rc_settings.radiation"),
}

Callback.addCallback("tick",function() {
	if(Radiation.radiation && World.getThreadTime() % 200 == 0) {
		var coords = Player.getPosition()
		var surface = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
		
		if(World.getBlockID(surface.x, surface.y, surface.z) == 2){
			coords.y++;
			if ((surface.y - coords.y) < 10  &&  Player.getArmorSlot(0).id != ItemID.ProtectiveHelmet && Player.getArmorSlot(1).id != ItemID.ProtectiveChestplate && Player.getArmorSlot(2).id != ItemID.ProtectiveLeggings && Player.getArmorSlot(3).id != ItemID.ProtectiveBoots) {
				Entity.damageEntity (Player.get(), 1); 
			} else 
				
			if (Player.getArmorSlot(0).id == ItemID.ProtectiveHelmet  &&  Player.getArmorSlot(1).id == ItemID.ProtectiveChestplate && Player.getArmorSlot(2).id == ItemID.ProtectiveLeggings  &&  Player.getArmorSlot(3).id == ItemID.ProtectiveBoots) {
				Entity.addEffect(Player.get(), 13, 60, 2, false, false);
		}}
	}
});

