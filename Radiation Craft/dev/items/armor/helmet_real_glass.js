
var PopupWindow;
var HRG = true;
var MainActivity = UI.getContext();

//HelmetUI

//GUI HRG
/*
function newHRG(){
	MainActivity.runOnUiThread(new java.lang.Runnable({
	run: function(){
	try{

		PopupWindow = new android.widget.PopupWindow();

		var LinearLayout = new android.widget.LinearLayout(MainActivity);
		LinearLayout.setOrientation(1);

		var File = new android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/menu/HG/HRG.png"));

		PopupWindow.setTouchable(false);

		PopupWindow.setContentView(LinearLayout);

		PopupWindow.setHeight(MainActivity.getWindowManager().getDefaultDisplay().getHeight());
		PopupWindow.setWidth(MainActivity.getWindowManager().getDefaultDisplay().getWidth());
		
		PopupWindow.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(File));
		PopupWindow.showAtLocation(MainActivity.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, 0,0);
	}catch(err){
print(err);
}
}}));
}

function leaveHRG(){
	MainActivity.runOnUiThread(new java.lang.Runnable({ run: function(){
	if(PopupWindow != null) {
		PopupWindow.dismiss();
		PopupWindow = null;
	}
}}));
}

if(Player.getArmorSlot(0) == 1611 && HRG == false)
{
HRG = true;
newHRG();
}else{
HRG = false;
leaveHRG();
}}*/