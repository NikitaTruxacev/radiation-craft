var GUIf;
var GUIa; 
var GUI;
var tap = 0;

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
	GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, -1, -1);
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

var btns = false;

Callback.addCallback("tick",function() {
	var item = Player.getCarriedItem();
	
	if(btns == false && item.id == ItemID.aks74u){
		btns = true;
		buttFireCrt();
		buttAimCrt();
		aimCrt();
	}else{
	if(btns == true && item.id != ItemID.aks74u){
		btns = false;
		buttFireLeave();
		buttAimLeave();
		aimLeave();
		Player.resetFov();
	}
}});

Callback.addCallback("LevelLeft", function(){
		buttFireLeave();
		buttAimLeave();
		aimLeave();
		Player.resetFov();
});

Callback.addCallback("NativeGuiChanged", function(screenName){
	if(screenName == "hud_screen" || screenName == "in_game_play_screen"){
		buttFireLeave();
		buttAimLeave();
		aimLeave();
		Player.resetFov();
	}
});

/*
var UIGuns = {

	gunButton: function(idgun){
		
	}
}*/