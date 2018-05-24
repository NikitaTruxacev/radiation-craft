var GUIf;
var GUIa; 
var GUI;

function buttFireCrt(){
		var ctxf = UI.getContext();
		ctxf.runOnUiThread(new java.lang.Runnable({ run: function(){
		try{
		var layoutf = new android.widget.LinearLayout(ctxf);
		layoutf.setOrientation(1);
     
		var bfire = new android.widget.Button(ctxf);
		bfire.setText('FIRE');
		bfire.setTextColor(android.graphics.Color.RED);
		bfire.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
		bfire.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
		
		var coords = Player.getPosition();
		var arrow = Entity.spawn(coords.x, coords.y, coords.z, Native.EntityType.ARROW);
		Entity.moveToAngle(arrow, Entity.getLookAngle(Player.get()), {speed: 100});
    }
    }));
    layoutf.addView(bfire);
     
     GUIf = new android.widget.PopupWindow(layoutf, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
	GUIf.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
	GUIf.showAtLocation(ctxf.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.RIGHT, 0, 0);
}catch(err){
	Game.message('An error occured: ' + err);
}}}));
}

function buttFireLeave(){
	var ctxf = UI.getContext();
	ctxf.runOnUiThread(new java.lang.Runnable({ run: function(){
		if(GUIf != null){
			GUIf.dismiss();
			GUIf = null;
	}
}}));
}

 function buttAimCrt(){
	var ctxa = UI.getContext();
	ctxa.runOnUiThread(new java.lang.Runnable({ run: function(){
	try{ 
	var layouta = new android.widget.LinearLayout(ctxa);
	layouta.setOrientation(1);
     
     var baim = new android.widget.Button(ctxa);
    baim.setText('AIM');
	baim.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
	baim.setTextColor(android.graphics.Color.BLACK);
    baim.setOnClickListener(new android.view.View.OnClickListener({
		onClick: function(viewarg){
		if(tap < 2){
			tap += 1;
		switch (tap){
		case 1:
			Player.setFov(50);
		break;
		case 2:
			Player.resetFov();
			tap = 0;
			}}
		}
    }));
layouta.addView(baim);
     
     GUIa = new android.widget.PopupWindow(layouta, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
	GUIa.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
	GUIa.showAtLocation(ctxa.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.LEFT, 0, 0);
	}catch(err){
Game.message('An error occured: ' + err);
} }}));
}


 function buttAimLeave(){
	var ctxa = UI.getContext();
	ctxa.runOnUiThread(new java.lang.Runnable({ run: function(){
	if(GUIa != null){
		GUIa.dismiss();
		GUIa = null;
	}
}}));
}

 function aimCrt(){
	var ctx = UI.getContext();
	ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
	try{ 
	var layout = new android.widget.LinearLayout(ctx);
	layout.setOrientation(1);
     
     var aimbutton = new android.widget.Button(ctx);
    aimbutton.setText('+');
	aimbutton.setTextColor(android.graphics.Color.WHITE);
    aimbutton.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
    layout.addView(aimbutton);
     
     GUI = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
	GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
	GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0, 0);
	}catch(err){
Game.message('An error occured: ' + err);
}}}));
}

 function aimLeave(){
	var ctx = UI.getContext();
	ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
	if(GUI != null){
		GUI.dismiss();
		GUI = null;
	}
}}));
}

//if item = true

var btns = false;

Callback.addCallback("tick",function() {
	if(btns == false && Player.getCarriedItem().id == ItemID.aks74U){
		btns = true;
		buttFireCrt();
		buttAimCrt();
		aimCrt();
	}
		
	if(btns == true && Player.getCarriedItem().id != ItemID.aks74U){
		btns = false;
		buttFireLeave();
		buttAimLeave();
		aimLeave();
		Player.resetFov();
	}
	
	/*if(World.getThreadTime() % 20 == 0 && (currentUIscreen == "hud_screen" || currentUIscreen == "in_game_play_screen")){
		if(btns == true){
			buttFireLeave();
			buttAimLeave();
			aimLeave();
			Player.resetFov();
	}}*/
});

Callback.addCallback("LevelLeft", function(){
		buttFireLeave();
		buttAimLeave();
		aimLeave();
		Player.resetFov();
});

/*
var UIGuns = {

	gunButton: function(idgun){
		
	}
}*/