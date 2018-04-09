
var rnd2 = randomInt(1, 60);
var time = rnd2 * 20;
var ZDise = 0; 

var ZDisease = {
	"zombie_disease": __config__.getBool("rc_settings.zombie_disease"),
}

Callback.addCallback("tick",function() {
	if(ZDisease.zombie_disease && World.getThreadTime() % 20 == 0) {
		if(ZDise >= 1){
			time--;
		if(time == 0){
			ZDise++;
			Entity.addEffect(Player.get(), 19, 60, 1, false, false);
			time = rnd2 *20;
	}}
	
	if(ZDise >= 11&&ZDise < 50) {
		Entity.addEffect(Player.get(),17, 60, 0, false,false);
	}
	
	if(ZDise >= 50&&ZDise < 100) {
		Entity.addEffect(Player.get(),2, 60, 1, false,false);
		Entity.addEffect(Player.get(),17, 60, 0, false,false);
	}
	
	if(ZDise >= 100&&ZDise < 150) {
		Entity.addEffect(Player.get(),2, 60, 1, false,false);
		Entity.addEffect(Player.get(),17, 60, 0, false,false);
		Entity.addEffect(Player.get(),4, 60, 2, false,false);
	}
	
	if(ZDise >= 150) {
	Game.message("§4Твой разум поглотил мрак, тебя уже никто не сможет спасти, теперь то, что от тебя осталось, будет бродить по миру до тех пор, пока не найдет свою смерть!");
	Player.setHealth(0);
	ZDise = 0;
	}
		Game.tipMessage("Ур: " + ZDise + "/150");
}});



Callback.addCallback("EntityHurt", function(attacker, victim, damage){
	if(ZDisease.zombie_disease){
	if(Entity.getType(attacker) == 32&&Entity.getType(victim) == Player.get()){
		ZDise += 1;
}}});
